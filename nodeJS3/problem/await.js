function delay(num, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num == 5) {
                resolve(num*2);
            }
            else {
                reject("숫자가 5가 아닙니다.");
            }
        }, time);
    });
}

async function processDelay() {
    try {
        const result = await delay(5, 1000);
        console.log(result);

        const result2 = await delay(10, 1000);
        console.log(result2);
    }
    // reject에서 반환된 결과가 error에 있음
    catch (error) {
        console.log(error);
    }
}

processDelay();