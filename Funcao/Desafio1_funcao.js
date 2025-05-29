//Desafio 1 (Funções) 
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

console.log("Digite dois números");
let numero1 = Number(prompt("Digite o numero 1: "));
let numero2 = Number(prompt("Digite o numero 2: "));

let operacoes = prompt(
  "\nDigite a operação que você deseja:\n1-Adição\n2-Subtração\n3-Multiplicação\n4-Divisão\nDigite aqui: "
);
let resultado;

switch (operacoes) {
  case "Adição":
  case "Adiçao":
  case "Adicao":
  case "adição":
  case "adiçao":
  case "adicao":
  case "1":
    resultado = soma(numero1, numero2);
    console.log("\nResultado: ", resultado);
    break;

  case "Subtração":
  case "Subtraçao":
  case "Subtracao":
  case "subtraçao":
  case "subtração":
  case "subtracao":
  case "2":
    resultado = subtracao(numero1, numero2);
    console.log("\nResultado: ", resultado);
    break;

  case "Multiplicação":
  case "Multiplicaçao":
  case "Multiplicacao":
  case "multiplicação":
  case "multiplicaçao":
  case "multiplicacao":
  case "3":
    resultado = multiplicacao(numero1, numero2);
    console.log("\nResultado: ", resultado);
    break;

  case "Divisão":
  case "Divisao":
  case "divisão":
  case "divisao":
  case "4":
    resultado = divisao(numero1, numero2);
    console.log("\nResultado: ", resultado);
    break;

  default:
    resultado = "Operação inválida.";
    console.log("Operação inválida");
}
