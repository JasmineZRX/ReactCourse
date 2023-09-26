const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Coriander" },
  { id: 5, name: "Chili Powder" },
  { id: 6, name: "Cumin" },
];
const spice = spices.find((spice) => spice.name === "Cumin");
const spiceInd = spices.findIndex((spice) => spice.name === "Cumin");
console.log(spice, spiceInd);
