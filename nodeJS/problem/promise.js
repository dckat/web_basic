let p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.");
    let a = Math.floor(Math.random()*10 - 2);
    let b = Math.floor(Math.random()*10 - 2);
    console.log(a + " " + b);
    if (a < 0 || b < 0) {
        reject("음수값이 나와서 실패!!");
    }

    let arr = [a, b];
    resolve(arr);
});

p.then((arr) => {
    let sum = arr[0] + arr[1];
    console.log("합>> " + sum);
    arr.push(sum);
    return arr;
})
.then((arr2) => {
    let mul = arr2[0] * arr2[1];
    console.log("곱>> " + mul);
    let result = [arr2[2], mul];
    return result;
})
.then((arr3) => {
    console.log(`두 수의 합은 ${arr3[0]}\n두 수의 곱은 ${arr3[1]}`);
})
.catch((error) => {
    console.log("에러 발생함 -> " + error);
})