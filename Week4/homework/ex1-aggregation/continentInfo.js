export const informationOfContinents = async (client, age, year) => {
    const continentsInfo= [
      {
        $match: {
          Age: `${age}`,
          Country: {
            $in: [
              "AFRICA",
              "ASIA",
              "EUROPE",
              "LATIN AMERICA AND THE CARIBBEAN",
              "NORTHERN AMERICA",
              "OCEANIA",
            ],
          },
          Year: year,
        },
      },
      {
        $addFields: {
          TotalPopulation: {
            $add: ["$M", "$F"],
          },
        },
      },
    ];
  
    const result = await client
      .db("databaseWeek4")
      .collection("data")
      .aggregate(continentsInfo)
      .toArray();
  
    console.log(
      `the information of population have age ${age} in year ${year} is `,
      result
    );
  };