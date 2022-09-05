let createAuthorsTables = `CREATE TABLE if not exists authors (
     author_no INTEGER PRIMARY KEY ,
    author_name VARCHAR(255),
    university  VARCHAR(255),
    date_of_birth DATE ,
    h_index INTEGER ,
    gender CHAR(1)
    );
`;


const addMentorColumn = `
    ALTER TABLE authors
      ADD mentor INTEGER,
      ADD CONSTRAINT FOREIGN KEY (mentor) REFERENCES authors(author_no);
    `;





export const keys = [
    createAuthorsTables,
    addMentorColumn
]