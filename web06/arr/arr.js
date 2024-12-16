// 1
let arr1 = [10, 20, 30, 40];
let sum = arr1.reduce((total, num) => total + num, 0);
console.log(sum);

// 2
let arr2 = [5, 12, 8, 130, 44];
let max = Math.max(...arr2);
console.log(max);

// 3
let arr3 = [1, 2, 3, 4, 5];
let check = arr3.includes(3);
console.log(check);

// 4
let arr4 = [1, 2, 3, 4, 5];
let newArr4 = arr4.filter((num) => num != 3);
console.log(newArr4);

// 5
let arr5 = [30, 10, 20, 50, 40];
let newArr5 = arr5.sort();
console.log(newArr5);

// 6
let arr6 = ["Apple", "Banana", "Cherry"];
let str = arr6.join(", ");
console.log(str);

// 7
let arr7 = [1, 2, 2, 3, 4, 4, 5];
let setArr = [...new Set(arr7)];
console.log(setArr);

// 8
let arr8 = [10, 15, 20, 25, 30];
let evenArr = arr8.filter((num) => num % 2 == 0);
console.log(evenArr);

// 9
let arr9 = [2, 3, 4];
let powArr = arr9.map((x) => x*x);
console.log(powArr);

// 10
let arr10 = [[1, 2], [3, 4], [5, 6]];
let mergedArr = arr10.flat();
console.log(mergedArr);