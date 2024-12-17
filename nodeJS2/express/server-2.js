const express = require("express");

const app = express();
const port = 2000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("my home page");
    console.log("첫페이지 get 요청 들어왔음.");
});

app.post("/go", (req, res) => {
    console.log("인증받지 못해 post요청 응답할 수 없음");
    res.status(400);
    res.send("NO Accept");
});

app.get("/info/:food", (req, res) => {
    let food = req.params.food;
    res.status(200);
    res.send("my food is " + food);
    console.log("my food is " + food);
});

app.get("/sum/:number", (req, res) => {
    let number = parseInt(req.params.number);
    let result = number + 100;
    res.status(200);
    res.send(result.toString());
    console.log(result);
});

app.listen(port, () => {
    console.log("==== my server port: " + port + " ====");
});