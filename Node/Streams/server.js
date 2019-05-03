const http = require("http");
const fs = require("fs");
const events = require("events");


const server = http.createServer((req, res) => {
    if(req.url === "/write-file") {
        // const readStream = fs.createReadStream(__dirname + "/readFile.txt");
        // const writeStream = fs.createWriteStream(__dirname + "/writeFile.txt");

        // readStream.pipe(writeStream);
        const readData = fs.readFileSync("readFile.txt", {flag: "r"});
        console.log(readData);
        fs.writeFileSync("writeFile.txt", readData.toString());
        res.write("Written");
        res.end();
    }
});

server.listen(8080, "0.0.0.0");