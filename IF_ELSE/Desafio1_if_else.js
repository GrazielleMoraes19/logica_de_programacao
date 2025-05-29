//Desafio 1 IF ELSE
let respostaCorreta = 0
let respostaIncorreta = 0

// Pergunta1
console.log("\n Qual é o maior planeta do Sistema Solar?")
console.log("\nA - Terra")
console.log("B - Júpiter")
console.log("C - Marte")
console.log("D - Vênus")
let pergunta1 = prompt("Digite a resposta: ")
if (pergunta1 == "B" || pergunta1 == "Júpiter" || pergunta1 == "b" || pergunta1 == "júpiter" || pergunta1 == "jupiter" || pergunta1 == "Jupiter" ){
  console.log ("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta2
console.log("\n Quantos lados tem um quadrado?")
console.log("\n A - 5")
console.log("B - 7")
console.log("C - 8")
console.log("D - 4")
let pergunta2 = prompt("Digite a resposta: ")
if (pergunta2 == "D" || pergunta2 == "4" || pergunta2 == "d"){
  console.log ("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta3
console.log("\n Qual é a capital do Brasil?")
console.log("\n A - Rio de Janeiro")
console.log("B - São Paulo")
console.log("C - Brasília")
console.log("D - Salvador")
let pergunta3 = prompt("Digite a resposta: ")
if (pergunta3 == "C" || pergunta3 == "c" || pergunta3 == "Brasília" || pergunta3 == "brasília" || pergunta3 == "Brasilia" || pergunta3 == "brasilia"){
  console.log ("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta4
console.log("\n Qual animal é conhecido como rei da selva?")
console.log("\n A - Macaco")
console.log("B - Elefante")
console.log("C - Leão")
console.log("D - Tigre")
let pergunta4 = prompt("Digite a resposta: ")
if (pergunta4 == "C" || pergunta4 == "c" || pergunta4 == "Leão" || pergunta4 == "leão" || pergunta4 == "leao" || pergunta4 == "Leao"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta5
console.log("\n Qual é a cor do céu em um dia sem nuvens?")
console.log("\n A - Verde")
console.log("B - Azul")
console.log("C - Vermelho")
console.log("D - Preto")
let pergunta5 = prompt("Digite a resposta: ")
if (pergunta5 == "B" || pergunta5 == "b" || pergunta5 == "Azul" || pergunta5 == "azul"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta6
console.log("\n Qual desses é um filme da Disney?")
console.log("\n A - Titanic")
console.log("B - O Rei Leão")
console.log("C - Velozes e Furiosos")
console.log("D - Jurassic Park")
let pergunta6 = prompt("Digite a resposta: ")
if (pergunta6 == "B" || pergunta6 == "b" || pergunta6 == "O Rei Leão" || pergunta6 == "O rei leão" || pergunta6 == "o rei leão" || pergunta6 == "O Rei Leao" || pergunta6 == "O rei leao" || pergunta6 == "o rei leao"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta7
console.log("\n Quantos dias tem uma semana?")
console.log("\n A - 7")
console.log("B - 5")
console.log("C - 8")
console.log("D - 6")
let pergunta7 = prompt("Digite a resposta: ")
if (pergunta7 == "A" || pergunta7 == "a" || pergunta7 == "7"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta8
console.log("\n Qual desses é um instrumento musical?")
console.log("\n A - Violino")
console.log("B - Martelo")
console.log("C - Lápis")
console.log("D - Garfo")
let pergunta8 = prompt("Digite a resposta: ")
if (pergunta8 == "A" || pergunta8 == "a" || pergunta8 == "Violino"|| pergunta8 == "violino"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta9
console.log("\n é o oposto de dia?")
console.log("\n A - Tarde")
console.log("B - Noite")
console.log("C - Manhã")
console.log("D - Anoitecer")
let pergunta9 = prompt("Digite a resposta: ")
if (pergunta9 == "B" || pergunta9 == "b" || pergunta9 == "Noite"|| pergunta9 == "noite"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Pergunta10
console.log("\n Quantos meses têm um ano?")
console.log("\n A - 10")
console.log("B - 11")
console.log("C - 12")
console.log("D - 13")
let pergunta10 = prompt("Digite a resposta: ")
if (pergunta10 == "C" || pergunta10 == "c" || pergunta10 == "12"){
  console.log("\n Alternativa correta")
  respostaCorreta ++
}
else{
  console.log("\n Resposta errada")
  respostaIncorreta ++
}

//Exibir o resultado
console.log("\n Resumo Final")
console.log("Respostas Corretas: " + respostaCorreta)
console.log("Resposta Incorretas: " + respostaIncorreta)
