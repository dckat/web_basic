async function process2(s, num) {
    const result = await new Promise((success) => {
        success(s.repeat(num));
    });
    console.log(result);
}

async function process3(num) {
    const result = await new Promise((success) => {
        let number = Math.floor(Math.random()*99+1);
        console.log("생성된 숫자: " + number);
        success(num + number);
    });
    console.log(result);
}

process2("*", 10);
process3(100);