const express = require("express");

const app = express(); // express할 수 있는 객체 리턴

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/index.html");     // 정적 파일 (static)
});

app.get("/contact", (req, res) => {
    console.log("/contact 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/contact.html");
});

app.get("/finance", (req, res) => {
    console.log("/finance 주소로 GET요청 들어옴.");
    res.status(200); //http header
    let data = {
        name: "삼성전자",
        code: "005930",
        current: 54900,
        high: 55200,
        low: 54000
    };
    // json으로 보내는 경우
    res.json(data);
});


app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});