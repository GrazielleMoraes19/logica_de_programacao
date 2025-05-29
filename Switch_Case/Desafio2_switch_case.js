//Desafio 2 Switch Case 
let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 1
console.log("Em que ano estamos? :");
console.log("A - 2025");
console.log("B - 2026");
console.log("C - 2060");
console.log("D - 2059");
let pergunta1 = prompt("Digite a alternativa: ");
switch (true) {
  case pergunta1 == "A" || pergunta1 == "2025":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 2
console.log("\nQuantos lados tem um quadrado?");
console.log("\nA - 5");
console.log("B - 7");
console.log("C - 8");
console.log("D - 4");
let pergunta2 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta2 == "d" || pergunta2 == "4" || pergunta2 == "D":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 3
console.log("\nQual é a capital do Brasil?");
console.log("\nA - Rio de Janeiro");
console.log("B - São Paulo");
console.log("C - Brasília");
console.log("D - Salvador");
let pergunta3 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta3 == "c" || pergunta3 == "brasília" || pergunta3 == "brasilia" || pergunta3 == "Brasilia" || pergunta3 == "Brasília" || pergunta3 == "C":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 4
console.log("\nQual animal é conhecido como rei da selva?");
console.log("\nA - Macaco");
console.log("B - Elefante");
console.log("C - Leão");
console.log("D - Tigre");
let pergunta4 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta4 == "c" || pergunta4 == "C" || pergunta4 == "leão" || pergunta4 == "Leão" || pergunta4 == "leao" || pergunta4 == "Leao":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 5
console.log("\nQual é a cor do céu em um dia sem nuvens?");
console.log("\nA - Verde");
console.log("B - Azul");
console.log("C - Vermelho");
console.log("D - Preto");
let pergunta5 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta5 == "b" || pergunta5 == "B" || pergunta5 == "azul":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 6
console.log("\nQual desses é um filme da Disney?");
console.log("\nA - Titanic");
console.log("B - O Rei Leão");
console.log("C - Velozes e Furiosos");
console.log("D - Jurassic Park");
let pergunta6 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta6 == "b" || pergunta6 == "B" || pergunta6.toLowerCase() === "o rei leão" || pergunta6.toLowerCase() === "o rei leao":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 7
console.log("\nQuantos dias tem uma semana?");
console.log("\nA - 7");
console.log("B - 5");
console.log("C - 8");
console.log("D - 6");
let pergunta7 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta7 == "a" || pergunta7 == "A" || pergunta7 == "7":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 8
console.log("\nQual desses é um instrumento musical?");
console.log("\nA - Violino");
console.log("B - Martelo");
console.log("C - Lápis");
console.log("D - Garfo");
let pergunta8 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta8 == "a" || pergunta8 == "A" || pergunta8.toLowerCase() == "violino":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 9
console.log("\nO que é o oposto de dia?");
console.log("\nA - Tarde");
console.log("B - Noite");
console.log("C - Manhã");
console.log("D - Anoitecer");
let pergunta9 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta9 == "b" || pergunta9 == "B" || pergunta9.toLowerCase() == "noite":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Pergunta 10
console.log("\nQuantos meses têm um ano?");
console.log("\nA - 10");
console.log("B - 11");
console.log("C - 12");
console.log("D - 13");
let pergunta10 = prompt("Digite a resposta: ");
switch (true) {
  case pergunta10 == "c" || pergunta10 == "C" || pergunta10 == "12":
    console.log("\nAlternativa correta");
    respostaCorreta++;
    break;
  default:
    console.log("\nResposta errada");
    respostaIncorreta++;
}

// Exibir o resultado
console.log("\nResumo Final");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);
