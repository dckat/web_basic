// 1
function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

processUserInput(greeting);

// 2
console.log("Start");

setTimeout(() => {
    console.log("This is a delayed message.");
}, 1000);

console.log("End");

// 3
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);