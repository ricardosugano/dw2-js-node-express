// VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
// VAR, LET e CONST
// VAR: No geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando não precisar reatribuir o valor da variável.

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "Registro"
// let cidade = "Pariquera" // Não pode
// let endereco
// endereco = "Rua tal..."
// const idade // Não pode
// const idade = 18
// idade = 20 // Não pode

//TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2> Olá! Bem-vindo! Essa á a sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}
// Invocando a função:
showMessage();

// FUNÇÃO COM PARÂMETROS
const user = "Ricardo";

function userMessage(user) {
// Essa função recebe um parâmetro
document.write(`<h3>O que deseja fazer hoje, ${user}? <h3>`);
}
userMessage(user);

