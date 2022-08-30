const CreateResearchPapersTable = `
  CREATE TABLE researchPapers(
    paper_id INT PRIMARY KEY, 
    paper_title VARCHAR(255), 
    conference VARCHAR(255), 
    publish_date DATE
    );
    `;

    
const CreateRegistrationTable = `
CREATE TABLE registration(
  registration_id INT PRIMARY KEY,
  author_no INT,
  paper_id INT,
  FOREIGN KEY (author_no) REFERENCES authors(author_no),
  FOREIGN KEY (paper_id) REFERENCES researchPapers(paper_id)
  );
  `;

  const authorsData = `
  INSERT INTO authors (author_no, author_name, university, date_of_birth, h_index, gender, mentor)  VALUES

    ( 1, "Robin", "Amsterdam", "1985-08-13", 100,"M", NULL ),
    ( 2,"Oscar", "London", "15-03-1987", 360,"M", 1),
    ( 3,"Jasmine, "Egypt", "13-12-1996", 400, "F", 3),
    ( 4,"Robby", "US", "20-02-1976, 255", "F", NULL ),
    ( 5,"Jack", "Amsterdam", "1985-08-13", 100,"M", 7 ),
    ( 6,"Kalyan","London", "15-03-1987", 360,"M", 1),
    ( 7,"Lora", "Egypt", "13-12-1996", 400, "F", 3),
    ( 8, "Kay","US", "20-02-1976", 255, "F", 5 ),
    ( 9,"Leo", "Amsterdam", "1985-08-13", 100,"M", NULL ),
    ( 10, "Omar","London", "15-03-1987", 360,"M", 1),
    ( 11, "Fatima","Egypt", "13-12-1996", 400, "F", 10),
    ( 12, "Layla","US", "20-02-1976", 255, "F", 6),
    ( 13,"leonard","Amsterdam", "1985-08-13", 100,"M", 6 ),
    ( 14, "Amar","London", "15-03-1987", 360,"M", 1),
    ( 15,"Baraah", "US", "20-02-1976", 255, "F", 9 );
`;


const researchPapersData = `
  INSERT INTO research_Papers (paper_id, paper_title, conference, publish_date) VALUES
  
  ( 1, "Is college education in line with the job market Part1", NULL, "2022-07-01"),
  ( 2, "Is college education in line with the job market Part2", NULL, "2022-09-01"),
  ( 3, "Is college education in line with the job market Part3", NULL, "2022-10-01"),
  ( 4, "How has the institution of marriage changed in the postmodern world Part1", NULL, "2022-07-01"),
  ( 5, "How has the institution of marriage changed in the postmodern world Part2", NULL, "2022-11-01"),
  ( 6, "How has the institution of marriage changed in the postmodern world Part3", NULL, "2022-12-01"),
  ( 7, "Exploring unfair child labor in the workplace Part1", NULL, "2022-03-01"),
  ( 8, "Exploring unfair child labor in the workplace Part2", NULL, "2022-04-01"),
  ( 9, "Exploring unfair child labor in the workplace Part3", NULL, "2022-05-01"),
  ( 10, "Exploring unfair child labor in the workplace Part4", NULL, "2022-06-01"),
  ( 11, "Terrorism and how it affects businesses Part1", NULL, "2022-01-15"),
  ( 12, "Terrorism and how it affects businesses Part2", NULL, "2022-02-15"),
  ( 13, "Terrorism and how it affects businesses Part3", NULL, "2022-03-15"),
  ( 14, "Terrorism and how it affects businesses Part4", NULL, "2022-04-15"),
  ( 15, "Ex-convicts and job searching. Is it difficult finding employment Part1", NULL, "2022-05-15"),
  ( 16, "Ex-convicts and job searching. Is it difficult finding employment Part2", NULL, "2022-06-15"),
  ( 17, "Ex-convicts and job searching. Is it difficult finding employment Part3", NULL, "2022-07-15"),
  ( 18, "Ex-convicts and job searching. Is it difficult finding employment Part4", NULL, "2022-08-15"),
  ( 19, "Ex-convicts and job searching. Is it difficult finding employment Part5", NULL, "2022-09-15"),
  ( 20, "Is feminism changing American society Part1 ", NULL, "2022-10-15"),
  ( 21,  "Is feminism changing American society Part2 ", NULL, "2022-11-15"),
  ( 22,  "Is feminism changing American society Part3 ", NULL, "2022-12-15"),
  ( 23,  "Is feminism changing American society Part4 ", NULL, "2023-01-15"),
  ( 24,  "Is feminism changing American society Part5 ", NULL, "2023-02-15"),
  ( 25, "What causes domestic violence and how to control it Part1", NULL, "2021-05-01"),
  ( 26, "What causes domestic violence and how to control it Part2", NULL, "2021-06-01"),
  ( 27, "What causes domestic violence and how to control it Part3", NULL, "2021-07-01"),
  ( 28, "What causes domestic violence and how to control it Part4", NULL, "2021-08-01"),
  ( 29, "What causes domestic violence and how to control it Part5", NULL, "2021-09-01"),
  ( 30, "What causes domestic violence and how to control it Part6", NULL, "2021-10-01");
  `;

const registrationData = `
  INSERT INTO enrollment (registration_id, author_no, paper_id) VALUES
    ( 1, 13,20),
    ( 2, 14,21),
    ( 3, 15,22),
    ( 4, 1,23),
    ( 5, 2,24),
    ( 6, 3,25),
    ( 7, 3,26),
    ( 8, 3,27),
    ( 9, 2,28),
    ( 10,1,29),
    ( 11,12,30),
    ( 12,8,19),
    ( 13,1,1),
    ( 14,10,16),
    ( 15,9,17),
    ( 16,4,19),
    ( 17,13,20),
    ( 18,14,21),
    ( 19,15,22),
    ( 20,1,23),
    ( 21,2,24),
    ( 22,3,25),
    ( 23,3,26),
    ( 24,3,27),
    ( 25,2,28),
    ( 26,1,29),
    ( 27,12,30),
    ( 28,1,20),
    ( 29,2,23),
    ( 30,5,25),
    ( 31,15,22),
    ( 32,1,23),
    ( 33,2,24),
    ( 34, 3,25),
    ( 35, 3,25);
`;


export const relationships = [
  "SET FOREIGN_KEY_CHECKS=0;",
  CreateResearchPapersTable,
  CreateRegistrationTable,
  authorsData,
  researchPapersData,
  registrationData,
  "SET FOREIGN_KEY_CHECKS=1;",
]