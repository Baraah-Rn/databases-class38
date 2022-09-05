const  printAuthorsMentorsData = `
SELECT
  a.author_no,
  a.author_name,
  m.author_name AS mentor
FROM authors a
INNER JOIN authors m
ON a.mentor = m.author_no;
`;


const printAuthorsTablePaperTitle  = `
  SELECT a.*, r.paper_title FROM registration e 
  LEFT JOIN authors a ON e.author_no = a.author_no
  LEFT JOIN researchPapers r ON r.paper_id = e.paper_id
  ORDER BY  a.author_no;
`;

export const joins = [
    printAuthorsMentorsData,
    printAuthorsTablePaperTitle
]