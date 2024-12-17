const fs = require("fs");   // commonsJS import!

let files = fs.readdirSync("./");
console.log(files);

fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log("나는 언제 실행되냐......");
console.log("나도 언제 실행되냐......");