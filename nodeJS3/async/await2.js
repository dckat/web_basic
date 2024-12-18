// 비동기처리 ==> async, await 활용
function delay(word, num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(word + "가 반환"), num);
    });
}

async function process() {
    // 먼저 처리할 부분 호출
    // Promise 객체 반환
    const result = await delay("안녕!", 1000);
    console.log(result);
}

process();