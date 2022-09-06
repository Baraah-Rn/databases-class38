const insertDataToAccount = `
  INSERT INTO account ( account_number , balance )
  VALUES
  (101, 3000),
  (102, 5000);
`;


const insertChangedDataToAccount= `
INSERT INTO account_changes ( change_number, account_number, amount, changed_date, remark)
VALUES
( 1, 507, 1000, "2021-06-23", null);
`;

export const insertData =[
    insertDataToAccount,
    insertChangedDataToAccount
    ];