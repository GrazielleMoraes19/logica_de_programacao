// Exercício 1:
let idade = prompt("Digite a sua idade: ");
if (idade >= 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}

// Exercício 2:
let horario = prompt("Digite o horario: ");
if (horario >= 6 && horario < 12) {
  console.log("Bom Dia!");
} else if (horario >= 12 && horario < 18) {
  console.log("Boa Tarde!");
} else if (horario > 18) {
  console.log("Boa Noite!");
} else {
  console.log("Opção invalida");
}

// Exercício 3:
idade = prompt("Digite a sua idade: ");
if (idade >= 16) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso Negado");
}

// Exercício 4:
let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite um número: "));
if (numero1 > numero2) {
  console.log("numero 1 é maior");
} else if (numero1 < numero2) {
  console.log("numero 2 é maior");
}

// Exercício 5:
let temperatura = Number(prompt("Digite a temperatura: "));
if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura <= 25) {
  console.log("Termico");
} else {
  console.log("Quente");
}

// Exercício 6:
let palavra = prompt("Digite uma palavra:");
if (palavra === "Felicidade") {
  console.log("Palavra correta");
} else {
  console.log("Palavra incorreta");
}

// Exercício 7:
let moedas = Number(prompt("Digite a quantidade de moedas:"));
if (moedas <= 10) {
  console.log("Poucas Moedas");
} else if (moedas > 10 && moedas <= 20) {
  console.log("Quantidade média de Moedas");
} else {
  console.log("Muitas Moedas");
}

// Exercício 8:
temperatura = Number(prompt("Digite a temperatura: "));
if (temperatura < 20) {
  console.log("Frio");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("Calor");
} else {
  console.log("Muito Quente");
}

// Exercício 9:
let numero = Number(prompt("Digite um numero: "))
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Exercício 10:
let nota = Number(prompt("Digite a sua nota: "));
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Exercício 11:
let animal = prompt("Digite o animal: ");
if (animal === "cachorro" || animal === "gato" || animal === "pássaro") {
  console.log(animal);
} else {
  console.log("Animal não listado.");
}

// Exercício 12:
let diasuteis = prompt("Digite o dia da semana: ");
if (
  diasuteis === "Segunda" ||
  diasuteis === "Terça" ||
  diasuteis === "Quarta" ||
  diasuteis === "Quinta" ||
  diasuteis === "Sexta"
) {
  console.log("Dia útil");
} else if (diasuteis === "Sábado" || diasuteis === "Domingo") {
  console.log("Final de Semana");
}

// Exercício 13:
let anosdeexperiencia = Number(prompt("Digite os anos de experiência: "));
if (anosdeexperiencia >= 2) {
  console.log("Experiente");
} else {
  console.log("Iniciante");
}

// Exercício 14:
let intervalo = Number(prompt("Digite um número: "));
if (intervalo >= 10 && intervalo <= 20) {
  console.log("Dentro do intervalo");
} else {
  console.log("Fora do intervalo");
}

// Exercício 15:
//Exercicios IF ELSE
idade = prompt("Digite a sua idade: ");
if (idade >= 18) {
  console.log("Pode tirar carteira de motorista");
} else {
  console.log("Não pode tirar carteira de motorista");
}

// Exercício 16:
let numero5 = Number(prompt("Digite um número: "));
if (numero5 > 0) {
  console.log("Positivo");
} else if (numero5 < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}