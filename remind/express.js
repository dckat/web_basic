const express = require("express");
const app = express();
const port = 3000;

// 응답 확인문제 1-1
app.get("/", (req, res) => {
    console.log("/ GET 요청 들어옴");
    res.status(200);
    res.json({result: "success", data: [1, 2, 3]});
});

// 응답 확인문제 1-2
app.get("/about", (req, res) => {
    console.log("/about GET 요청 들어옴");
    res.status(200);
    res.sendFile(__dirname + "/about.html");
});

// 요청-응답 확인문제 2-1
app.get("/json", (req, res) => {
    console.log("/json GET 요청 들어옴");
    res.status*(200);
    res.json({cat: "feline", dog: "canine", rat: "murine"});
});

// 요청-응답 확인문제 2-2
app.get("/html", (req, res) => {
    console.log("/html GET 요청 들어옴");
    res.status(200);
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => {
    console.log(`${port}번 포트 실행 중`);
});