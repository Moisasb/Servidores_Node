// importa o módulo do note.js
// Este módulo já vem nativo no node e permite criar
// servidores na web
const http = require("http");

//Criando servidor
// creatServer recebe a função que será executada toda vez que algúem acessao servidor

// req (request) => informações de requisição
// res (response => resposta que vamos enviar ao cliente
const servidor = http.createServer((req,res)=> {
    
    // enviandi a resposta para o navegador
    res.end("Meu primeiro servidor Node!");
});

// Faz o servifor buscar na porta 3000 (escolhida por nós)
servidor.listen(3000);

// Portas comuns;
// 3000 => desenvolvimento
// 5000 => comum para API'S
// 8080 => alternativas para web
// 80 => HTTP padrão
// 443 => HTTPS