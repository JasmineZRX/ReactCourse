// slice, won't modify word
const word = ["a", "b", "c", "d"];
console.log(word.slice(1, 4));
console.log(word.slice(0, word.length - 1));
console.log(word.slice(-1));
console.log(`word is: ${word}`);

// splice, will modify word
console.log(word.splice(1, 1, "B"));
console.log(`word is: ${word}`);

// filter, didn't modify spices array
const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Coriander" },
  { id: 5, name: "Chili Powder" },
];
const filteredSpices = spices.filter((spice) => {
  //   return spice.id === 4;
  return spice.name.startsWith("C");
});
console.log(filteredSpices);
console.log(spices);
