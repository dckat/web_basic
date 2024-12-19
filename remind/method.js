// callback 1
function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

// 출력: Hello, Alice
processUserInput(greeting);

// callback 2
// 출력순서: Start -> End -> This is a delayed message
console.log("Start");

setTimeout(() => {
    console.log("This is a delayed message");
}, 1000);

console.log("End");

// arrow 1
let getMessage = () => "Hello, World!";

// arrow 2
let addTen = num => num + 10;

// arrow 3
let getUser = () => ({name: "Alice", age: 25});