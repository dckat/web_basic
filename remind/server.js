const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// 라우터 login
app.get("/login", (req, res) => {
    console.log("/login GET 요청 들어옴");
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/check", (req, res) => {
    console.log("/check GET 요청 들어옴");
    res.status(200);

    // check?id=apple&pw=1234
    let idValue = req.query.id;     // input name = "id"
    let passwordValue = req.query.password;     // input name = "pw"
    console.log(idValue + " " + passwordValue);

    let result = "";
    if (idValue == "root" && passwordValue == "1234") {
        result = "login OK!!!";
    } else {
        result = "login NO!!!";
    }
    res.send(result);
});

// 라우터 게시판 쓰기
app.get("/board", (req, res) => {
    console.log("/board GET 요청 들어옴");
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "board.html"));
});

app.get("/board2", (req, res) => {
    console.log("/board2 GET 요청 들어옴");
    res.status(200);

    let noValue = req.query.no;
    let titleValue = req.query.title;
    let contentValue = req.query.content;
    let writerValue = req.query.writer;

    let result = "no: " + noValue + ", title: " + titleValue + ", content: " + contentValue + ", writer: " + writerValue;
    console.log(result);
    res.send(result);
});

app.listen(3000, () => {
    console.log(`${port}번 포트 실행 중`);
});