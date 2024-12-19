// 1
let arr1 = [10, 20, 30, 40];
let result1 = arr1.reduce((sum, x) => sum + x, 0);
console.log(result1);

// 2
let arr2 = [5, 12, 8, 130, 44];
let result2 = Math.max(...arr2);
console.log(result2);

// 3
let arr3 = [1, 2, 3, 4, 5];
let result3 = arr3.includes(3);
console.log(result3);

// 4
let arr4 = [1, 2, 3, 4, 5];
let result4 = arr4.filter((x) => x != 3);
console.log(result4);

// 5
let arr5 = [30, 10, 20, 50, 40];
let result5 = arr5.sort();
console.log(result5);

// 6
let arr6 = ["Apple", "Banana", "Cherry"];
let result6 = arr6.join(", ");
console.log(result6);

// 7
let arr7 = [1, 2, 2, 3, 4, 4, 5];
let result7 = [...new Set(arr7)];
console.log(result7);

// 8
let arr8 = [10, 15, 20, 25, 30];
let result8 = arr8.filter((num) => num % 2 == 0);
console.log(result8);

// 9
let arr9 = [2, 3, 4];
let result9 = arr9.map((num) => num ** 2);
console.log(result9);