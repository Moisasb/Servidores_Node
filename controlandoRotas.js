const http = require("http");

const servidor = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Pagina principal");
    } else if (req.url == "/sobre") {
        res.end("Sobre o sistema");
    } else if (req.url == "/contato") {
        res.end("Contato");
    } else {
        res.end("Pagina nao encontrada");
    };
});

servidor.listen(3000);