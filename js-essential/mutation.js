// immutably change user
const user = {
  username: "uuid",
  firstName: "Mia",
  lastName: "Xie",
  posts: ["a", "b", "c"],
};
function setName(user, newName) {
  return {
    ...user,
    firstName: newName,
    posts: [...user.posts, "d"],
  };
}
console.log(user);
const newUser = setName(user, "someone else");
console.log(newUser);
console.log(user === newUser);
console.log(user.posts === newUser.posts);
