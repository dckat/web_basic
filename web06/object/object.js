// 1
const obj1 = {};
console.log(Object.keys(obj1).length == 0);

// 2
const obj2 = {name: "Alice", age: 25};
console.log(Object.keys(obj2).includes("age"));

// 3
const obj3 = {x: 10, y: 20, z: 30};
console.log(Object.keys(obj3));

// 4
console.log(Object.values(obj3));

// 5
console.log(Object.entries(obj3));