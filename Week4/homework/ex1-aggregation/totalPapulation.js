const TotalPopulationForAllAges = [
    {
      $match: {
        Country: "Netherlands",
      },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: { $sum: { $sum: ["$M", "$F"] } },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
  
  export const countTotalPopulation = async (client, Country) => {
    const TotalPopulationForAllAges = [
      {
        $match: {
          Country: `${Country}`,
        },
      },
      {
        $group: {
          _id: "$Year",
          countPopulation: { $sum: { $sum: ["$M", "$F"] } },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ];
    const result = await client
      .db("databaseWeek4")
      .collection("data")
      .aggregate(TotalPopulationForAllAges)
      .toArray();
  
    console.log(
      "the array of the total population (M + F over all age groups)",
      result
    );
  };