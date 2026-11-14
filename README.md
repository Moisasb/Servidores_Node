# Fundamentos de servidores com Node.js

Repositório de exercícios práticos para compreender como criar servidores HTTP utilizando os módulos nativos do Node.js.

## Objetivo

Explorar o funcionamento básico de um servidor web: receber requisições, identificar caminhos solicitados e devolver respostas ao cliente.

## Exemplos incluídos

- Criação de servidor HTTP com `node:http`.
- Definição de endereço e porta de execução.
- Configuração de status e cabeçalhos da resposta.
- Tratamento de diferentes caminhos, como página inicial, sobre e contato.
- Resposta para caminhos não reconhecidos.
- Arquivos separados para experimentar diferentes formas de iniciar e controlar o servidor.

## Como executar

É necessário ter o Node.js instalado.

Na raiz do repositório, execute um dos exemplos:

```bash
node index.js
node server.js
node controlandoRotas.js
```

Os scripts definidos no `package.json` também podem ser utilizados:

```bash
npm start
npm run server
npm run rotes
```

Depois, acesse [http://localhost:3000](http://localhost:3000).

> Execute um servidor por vez quando os exemplos utilizarem a mesma porta.

## Tecnologias e conceitos

- JavaScript
- Node.js
- Módulo HTTP nativo
- Requisição e resposta HTTP
- Rotas e códigos de status

## Aprendizados

Os exercícios demonstram a base do funcionamento de aplicações back-end antes da utilização de frameworks como Express e NestJS.

## Repositório

[github.com/Moisasb/Servidores_Node](https://github.com/Moisasb/Servidores_Node)
