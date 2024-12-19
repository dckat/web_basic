// 1
const obj1 = {};
console.log(Object.keys(obj1).length == 0);

// 2
const obj2 = {
    name: "Alice",
    age: 25
};
console.log("age" in obj2);

// 3.4.5
const obj3 = {
    x: 10,
    y: 20,
    z: 30
};

// 3
let result3 = Object.keys(obj3);
console.log(result3);

// 4
let result4 = Object.values(obj3);
console.log(result4);

// 5
let result5 = Object.entries(obj3);
console.log(result5);