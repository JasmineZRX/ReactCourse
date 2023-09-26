const n1 = [1];
const n2 = [2];
console.log(n1.concat(11, 111));

console.log(n1.concat(n2));
console.log([...n1, ...n2]);

console.log([0, ...n1, ...n2, 22, 222]);
