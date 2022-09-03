const INSERT_ACCOUNT_DATA = `
  INSERT INTO account ( account_number , balance )
  VALUES
  (101, 2000),
  (102, 3000);
`;

const INSERT_ACCOUNT_CHANGES_DATA = `
INSERT INTO account_changes ( change_number, account_number, amount, changed_date, remark)
VALUES
( 1, 101, 50, "2022-08-30", null);
`;

export const insertData = [INSERT_ACCOUNT_DATA, INSERT_ACCOUNT_CHANGES_DATA];
