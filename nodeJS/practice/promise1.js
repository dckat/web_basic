const p = new Promise((success, fail) => {
    // setTimeout(/*시간지나면 실행할 함수 */, /* 몇초*/);
    // setTimeout(() => "ok", 2000);
    setTimeout(() => {
        let num = Math.random();    // 0 ~ 1

        // 실패조건: 0.8보다 클때
        if (num > 0.8) {
            // 실패시 catch로 넘어감.
            fail("생성된 숫자가 0.8이상 " + num);
        }
        success(num);   // 성공 시 then으로 넘어감
    }, 2000);
});

p.then((x) => console.log("성공! 전달받은 값>> " + x))
.catch((e) => console.log("에러 정보>> " + e));

console.log("Promise 객체 생성됨");