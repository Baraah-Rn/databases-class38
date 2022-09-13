import csv from "csvtojson";

export const insertData = async (client) => {
  const data = await convertToJson();
  const convertStringToNumber = data.map((object) => {
    return {
      Country: object.Country,
      Year: parseFloat(object.Year),
      Age: object.Age,
      M: parseFloat(object.M),
      F: parseFloat(object.F),
    };
  });
  await client
    .db("databaseWeek4")
    .collection("data")
    .insertMany(convertStringToNumber);
  console.log("data is inserted");
};

const convertToJson = async () => {
  const jsonData = await csv().fromFile("population_pyramid_1950-2022.csv");
  console.log("data is converted to json");
  return jsonData;
};
