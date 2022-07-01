const data = {
  username: "Pierre",
  performance: [
    { value: 100, kind: 1, kindOfData: "Cardio" },
    { value: 80, kind: 2, kindOfData: "Énergie" },
    { value: 150, kind: 3, kindOfData: "Endurance" },
    { value: 30, kind: 4, kindOfData: "Force" },
    { value: 120, kind: 5, kindOfData: "Vitesse" },
    { value: 50, kind: 6, kindOfData: "Intensité" },
  ],
  score: {
    name: 0.7,
    value: 72,
  },
  nutrients: [
    {
      type: "Calories",
      amount: 2140,
      unit: "kCal",
    },
    {
      type: "Protéines",
      amount: 50,
      unit: "g",
    },
    {
      type: "Glucides",
      amount: 170,
      unit: "g",
    },
    {
      type: "Lipides",
      amount: 110,
      unit: "g",
    },
  ],
  activity: [
    {
      day: "2020-07-01",
      kilogram: 64,
      calories: 165,
      name: 1,
    },
    {
      day: "2020-07-02",
      kilogram: 65,
      calories: 130,
      name: 2,
    },
    {
      day: "2020-07-03",
      kilogram: 66,
      calories: 110,
      name: 3,
    },
    {
      day: "2020-07-04",
      kilogram: 64,
      calories: 450,
      name: 4,
    },
    {
      day: "2020-07-05",
      kilogram: 63,
      calories: 180,
      name: 5,
    },
    {
      day: "2020-07-06",
      kilogram: 64,
      calories: 120,
      name: 6,
    },
    {
      day: "2020-07-07",
      kilogram: 62,
      calories: 405,
      name: 7,
    },
  ],
  duration: [
    {
      weekDays: "L",
      sessionLength: 20,
    },
    {
      weekDays: "M",
      sessionLength: 30,
    },
    {
      weekDays: "M",
      sessionLength: 40,
    },
    {
      weekDays: "J",
      sessionLength: 20,
    },
    {
      weekDays: "V",
      sessionLength: 50,
    },
    {
      weekDays: "S",
      sessionLength: 60,
    },
    {
      weekDays: "D",
      sessionLength: 45,
    },
  ],
};

export default data;
