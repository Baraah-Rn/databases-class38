const numOfAuthWrotePapers = `
  SELECT 
    r.paper_id, r.paper_title, 
    count(e.paper_id) as authorsCount 
  FROM researchPapers r
  LEFT JOIN registration e
  ON e.paper_id = r.paper_id
  GROUP BY r.paper_id;
`;


const papersByFemaleAuth = `
  SELECT 
    count(*) AS papersByFemaleAuth 
  FROM registration e  
  JOIN authors a
  ON a.gender = "F" AND a.author_no = e.author_no;
`;


const authByUniversity_Avg = `
  SELECT 
    university, 
    AVG(h_index) AS avg_idx
  FROM authors 
  GROUP BY university;
`;


const authByUniversity_Sum = `
  SELECT
    a.university, 
    count(e.paper_id) AS published_paper
  FROM registration e
  JOIN authors a
  ON a.author_no = e.author_no
  GROUP BY university
  ORDER BY published_paper DESC;
`;


const authByUniversity_MIN_MAX = `
SELECT 
university,
  MIN(h_index) AS Smallest_idx,
  MAX(h_index) AS Largest_idx
FROM authors
GROUP BY university
ORDER BY Largest_idx DESC;
`;

export const AggregateFunctions = [
  numOfAuthWrotePapers,
  papersByFemaleAuth,
  authByUniversity_Avg,
  authByUniversity_Sum,
  authByUniversity_MIN_MAX
] 