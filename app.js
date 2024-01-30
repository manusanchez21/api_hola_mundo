const http = require("http");

const hostName = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end('{"message": "Hola mundo"}');
});

server.listen(PORT, hostName, () => {
    console.log(`Server corriendo en http://${hostName}:${PORT}/`);
});
