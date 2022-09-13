export const transferCredits = async (
    client,
    fromAccountId,
    toAccountId,
    amount,
    remark = ""
  ) => {
    const accountsCollection = client.db("wallet").collection("accounts");
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await accountsCollection.updateOne(
          { account_number: fromAccountId },
          { $inc: { balance: amount * -1 } },
          { session }
        );
  
        await accountsCollection.updateOne(
          { account_number: fromAccountId },
          {
            $push: {
              account_changes: {
                change_number:
                  (await getLastChangeNumber(client, fromAccountId)) + 1,
                amount: amount * -1,
                changed_date: `${new Date()}`,
                remark: remark,
              },
            },
          },
          { session }
        );
  
        await accountsCollection.updateOne(
          { account_number: toAccountId },
          { $inc: { balance: amount } },
          { session }
        );
  
        await accountsCollection.updateOne(
          { account_number: toAccountId },
          {
            $push: {
              account_changes: {
                change_number:
                  (await getLastChangeNumber(client, toAccountId)) + 1,
                amount: amount,
                changed_date: `${new Date()}`,
                remark: remark,
              },
            },
          },
          { session }
        );
      });
      console.log(
        `the amount ${amount} is transferred from account ${fromAccountId} , to account ${toAccountId}  `
      );
    } catch (error) {
      console.log("the transaction has been stopped because : ", error);
      await session.abortTransaction();
    } finally {
      await session.endSession();
    }
  };
  
  const getLastChangeNumber = async (client, accountNumber) => {
    const account = await client
      .db("bank")
      .collection("accounts")
      .find({ account_number: accountNumber })
      .toArray();
    const lastItemIndex = account[0].account_changes.length - 1;
    return account[0].account_changes[lastItemIndex].change_number;
  };