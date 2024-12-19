const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const mysql = require("mysql2");

const port = 9999;

const app = express(); // express할 수 있는 객체 리턴

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: '1234'
});

app.get("/insert", (req, res) => {
    console.log("/insert 주소로 GET요청");
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "insert.html"));
});

app.post("/insert2", (req, res) => {
    console.log("/insert2 주소로 GET요청 들어옴.");
    res.status(200);                // http header

    let idValue = req.body.id;
    let pwValue = req.body.password;

    // pwValue 단방향 해싱
    // pwValue: body를 통해 받아온 password 입력값
    let hashAlgorithm = crypto.createHash("sha512");
    let hashing = hashAlgorithm.update(pwValue);
    let hashedPw = hashing.digest("base64");

    let nameValue = req.body.name;
    let telValue = req.body.tel;
    let result = "id=" + idValue + ", pw=" + pwValue + ", hashedPW=" + hashedPw + ", name=" + nameValue + ", tel=" + telValue;
    console.log(result);

    const sqlQuery = "INSERT INTO users(id, password, name, tel) VALUES (?, ?, ?, ?)";

    db.query(sqlQuery, [idValue, hashedPw, nameValue, telValue], (err, result) => {
        res.send(result);
    })
});

app.get("/delete", (req, res) => {
    console.log("/delete 주소로 GET요청");
    res.status(200);
    res.sendFile(path.join(__dirname, "views", "delete.html"));
});

app.post("/delete2", (req, res) => {
    console.log("/insert2 주소로 GET요청 들어옴.");
    res.status(200);                // http header

    let idValue = req.body.id;
    let result = "삭제할 id는 " + idValue + "임";
    console.log(result);

    const sqlQuery = "DELETE from users where id = ?";
    db.query(sqlQuery, [idValue], (err, result) => {
        res.send(result);
    });
});


app.listen(port, () => {
    console.log("-------------------------");
    console.log(port + "번 포트 서버 시작되었습니다.");
    console.log("-------------------------");
});