const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo desde Node.js");
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`servidor corrienndo en http://localhost:${PORT}`);
});

