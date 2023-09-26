// with map
const people = [
  {
    first: "Dan",
    last: "Abramov",
  },
  {
    first: "Ali",
    last: "Spittel",
  },
  {
    first: "Sam",
    last: "Drasner",
  },
];
const names = people.map((person) => {
  return {...person, first: person.first + '!'};
});

console.log(names);

console.log(people);
