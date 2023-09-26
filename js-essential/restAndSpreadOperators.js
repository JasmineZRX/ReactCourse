// Rest & Spread operators
function printArgs(...args) {
  console.log(args);
}
printArgs(1, 2, 3);

function printArgsRest(first, second, ...rest) {
  console.log(first, second, rest);
}
printArgsRest(1, 2, 3, 4, 5);

const user = { firstName: "David", lastName: "Ceddia" };
console.log({
  firstName: "Default",
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
});

const DEBUG = true;
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug("this", "works", "well");
