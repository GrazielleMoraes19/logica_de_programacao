//Desafio 2 (Função)
let login = prompt("Digite o usuário: ");
let senha = prompt("Digite a senha:");

let login1 = "Admin";
let senha1 = "Admin";

let login2 = "Grazielle";
let senha2 = "Moraes";

let login3 = "SCCP";
let senha3 = "1910";

let login4 = "ABCD";
let senha4 = "EFGH";

let login5 = "Corinthians";
let senha5 = "Pulista";

let login6 = "123";
let senha6 = "456";

let login7 = "Amor";
let senha7 = "Paz";

let login8 = "dourado";
let senha8 = "prata";

let login9 = "Santana";
let senha9 = "Grazielle";

let login10 = "Grazi";
let senha10 = "Grazi";

function verificarLogin(usuario, senha) {
  if (usuario === login1 && senha === senha1) {
    return "Login bem-sucedido!";
  } else if (usuario === login2 && senha === senha2) {
    return "Login bem-sucedido!";
  } else if (usuario === login3 && senha === senha3) {
    return "Login bem-sucedido!";
  } else if (usuario === login4 && senha === senha4) {
    return "Login bem-sucedido!";
  } else if (usuario === login5 && senha === senha5) {
    return "Login bem-sucedido!";
  } else if (usuario === login6 && senha === senha6) {
    return "Login bem-sucedido!";
  } else if (usuario === login7 && senha === senha7) {
    return "Login bem-sucedido!";
  } else if (usuario === login8 && senha === senha8) {
    return "Login bem-sucedido!";
  } else if (usuario === login9 && senha === senha9) {
    return "Login bem-sucedido!";
  } else if (usuario === login10 && senha === senha10) {
    return "Login bem-sucedido!";
  } else {
    return "Usuário ou senha incorretos.";
  }
}

let resultado = verificarLogin(login, senha);
console.log(resultado);
