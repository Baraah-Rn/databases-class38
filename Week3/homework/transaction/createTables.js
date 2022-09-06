const createAccountTable = `
  CREATE TABLE account (
  account_number INT PRIMARY KEY, 
  balance INT
  );
`;


const createAccountChangeTable = `
CREATE TABLE account_changes(
change_number INT PRIMARY KEY,
account_number INT,
amount INT,
changed_date date, 
remark varchar(255),
FOREIGN KEY (account_number) REFERENCES account(account_number));
`;

export const createTables = [
    createAccountTable,
    createAccountChangeTable
];