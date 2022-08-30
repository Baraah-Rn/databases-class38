


    let createAuthorsTables = `CREATE TABLE if not exists  authors (
     author_no INTEGER PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(255) NOT NULL,
    university_id INTEGER NOT NULL,
    date_of_birth DATE NOT NULL,
    h_index INTEGER NOT NULL,
    gender ENUM('M', 'F') NOT NULL,
);`
  

const addMentorColumn = `
    ALTER TABLE authors
      ADD mentor int,
      ADD CONSTRAINT FOREIGN KEY (mentor) REFERENCES authors(author_no);
    `;





export const keys = [
    createAuthorsTables,
    addMentorColumn
]