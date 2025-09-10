// Importando o Express (framework)
const express = require("express");
// Iniciando o Express na variável "app"
const app = express();


// CONFIGURANDO O EJS
app.set(`view engine`, `ejs`)


// Criando a primeira rota do site (Rota Principal)
// REQ - Trata a Requisição / RES = Trata a Respota
app.get("/", (req, res) => {
  res.send(
    res.render("index")
  );
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.send("<h1>Bem-vindo a pagina de Produtos!</h1");
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem-vindo a pagina de Clientes!</h1");
});

// Iniciando o Servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servisor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
