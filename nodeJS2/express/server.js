const express = require("express");

const app = express();  // express를 사용할 수 있는 객체 반환

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴");
    res.status(200);                        // http header
    res.send("Hello Node!!! express!!");    // http body
});

app.get("/home", (req, res) => {
    console.log("/home 주소로 GET요청 들어옴");
    res.status(200);                        // http header
    res.send("Hello HOME!!! express!!");    // http body
});

app.get("/contacts/:id", (req, res) => {
    console.log("/contacts/:id 주소로 GET요청 들어옴");
    let id = req.params.id;
    res.status(200);                        // http header
    res.send("your id >> " + id);
});

app.listen(3000, () => {
    console.log("---------------------");
    console.log("3000번 포트 서버 시작.");
    console.log("---------------------");
})