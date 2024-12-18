const fs = require("fs").promises;

async function readDirAsync() {
    // ls 명령어 결과를 files에 넣은 다음
    // files 출력
    const files = await fs.readdir("../");
    console.log(files);
}


// 밑에 실행될 것이 있는 경우
readDirAsync();
console.log("파일을 받아옵니다.");