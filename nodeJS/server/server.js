const http = require("http");

const server = http.createServer((req, res) => {
    // 클라이언트가 요청할 때 어떻게 처리할지를 구현
    console.log("클라이언트 요청 들어옴.");
    console.log(req.method);        // 요청. 삭제. 수정

    let method = req.method;
    let url = req.url;

    res.setHeader("Content-Type", "text/plain");
    // res.write("Hello NodeJS");
    // res.end();  // 응답 종료
    if (method == 'GET' && url == '/home') {
        res.statusCode = 200;           // HTTP header
        res.end("HOME page...!!!");     // HTTP body
    } else if (method == 'GET' && url == '/about') {
        res.statusCode = 200;           // HTTP header
        res.end("ABOUT page...!!!");    // HTTP body
    } else {
        res.statusCode = 404;               // HTTP header
        res.end("File Not Found...!!!");    // HTTP body
    }
});

server.listen(3000, () => {
    // 3000번 포트로 서버가 시작됐을 때 처리할 내용
    console.log("3000번 포트에서 서버 시작");
});