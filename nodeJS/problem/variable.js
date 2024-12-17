// 1
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(10, 20, 30));
console.log(sumNumbers(5, 15));

// 2
function printInfo(name, age, ...hobbies) {
    console.log(name + " " + age + " ", hobbies);
}

printInfo("이영희", 25, "독서", "요가", "영화 감상");
printInfo("김철수", 30);