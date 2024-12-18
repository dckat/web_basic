const express = require("express");

const app = express(); // express할 수 있는 객체 리턴

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/index.html");     // 정적 파일 (static)
});

app.get("/home", (req, res) => {
    console.log("/home 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(__dirname + "/home.html");
});

app.get("/weather", (req, res) => {
    console.log("/weather 주소로 GET요청 들어옴.");
    res.status(200); //http header
    let data = {
        temperature : -1,
        highTemp : 5,
        lowTemp : -7,
        viualization : 100
    };
    // json으로 보내는 경우
    res.json(data);
});


app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});