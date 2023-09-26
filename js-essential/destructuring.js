// destructure object
const nums = [1, 2, 3];
const [a, b, ...others] = nums;
console.log(a, b, others);

// rename object property
const user = { firstName: "Mia", lastName: "Xie", username: "uuid" };
const { firstName: fname, lastName } = user;
console.log(fname, lastName);

// username is "missing" if not defined in user object
// const { username = "missing" } = user;
// console.log(username);

// remove an property from user
const { username, ...name } = user;
console.log(name);
console.log(user);
