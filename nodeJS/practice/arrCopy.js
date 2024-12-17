// 얕은 복사
let arr1 = [1, 2];      // arr1 주소가 가르키는 것: [1, 2]
let arr2 = arr1;        // arr2에 arr1만 복사
arr1[0] = 2;            // 가르키는 주소에 0번째 인덱스 변경
console.log(arr1);
console.log(arr2);

// 깊은 복사
let arr3 = [1, 2];      // arr3 주소가 가르키는 것: [1, 2]
let arr4 = [...arr3];   // arr4 주소가 가르키는 것: [1, 2] (arr3 주소와 다름)
arr3[0] = 5;
console.log(arr3);
console.log(arr4);