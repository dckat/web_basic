async function process2(name, age) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (age < 0) {
                reject(name + "의 나이가 음수입니다.");
            }
            let msg = name + "의 내년 나이는 " + (age+1) + "살이다.";
            resolve(msg);
        });
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

// resolve
process2("홍길동", 10);

// reject
process2("홍길동", -5);