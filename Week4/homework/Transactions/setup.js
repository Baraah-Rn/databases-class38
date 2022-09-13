export const createAccount = async (client, accountNumber, balance) => {
    const account = {
      account_number: `${accountNumber}`,
      balance: balance,
      account_changes: [
        {
          change_number: 1,
          amount: 0,
          changed_date: `${new Date()}`,
          remark: "",
        },
      ],
    };
    await client.db("bank").collection("accounts").insertOne(account);
    console.log(`account number ${accountNumber} is created`);
  };