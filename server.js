// Estamos importando a função creatServer do módulo http
//do node
const { createServer } = require("node:http");

const hostname = "127.0.0.1"; // endereço do servidor
const port = 3000; // porta onde o servidor vai rodar

//Criando o servidor
const server = createServer((req, res) => {
    res.statusCode = 200; // OK!

    //Define o ripo de conteúdo da resposta
    //Qui estamos dixendo que é um texto simples
    res.setHeader('Content-type', 'text/plain');

    res.end("hello, NODE!");
});

//Quando o servidor "escutar" na porta e no endereço que definimos.
//Quando o servidor iniciar, executa essa função.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});