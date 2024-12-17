// 1
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf-8");
fs.writeFileSync("text-1.txt", data);

// 2
fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        fs.writeFile("text2-txt", data, (err, data) => {
            if (err) {
                console.log(err);
            }
        });
    }
});