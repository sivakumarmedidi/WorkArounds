const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        const rs = fs.createReadStream("index.html");
        rs.pipe(res);
    } else if(req.url === "/fetch-file") {
        const rs = fs.createReadStream("readFile.txt", "utf8");
        res.setHeader("Content-Type", "application/JSON");
        rs.on("data", chunk => {
            res.write(chunk);
        })
        rs.on("end", () => {
            res.end();
        });
        
        // res.end();
    } else if(req.url.indexOf("/assets") === 0) {
        try {
            const filePath = req.url.slice(7);
            res.setHeader("Content-Type", "application/js");
            const rs = fs.createReadStream(__dirname + filePath);
            rs.on("error", _ => {
                res.end(`No resource found`);
            });
            rs.pipe(res);
        } catch(e) {
            res.end(`No resource found, ${e.message}`);
        }
    } else {
        res.writeHead("404");
        res.end("404! No resource found");
    }
});


server.listen(1234);