// Desafio 1 - Cadastro com prompt
let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite a sua idade: "));
let email = prompt("Digite o seu email: ");
let telefone = prompt("Digite o seu telefone: ");

console.log("O seu nome é", nome, ", você tem", idade, "anos,", "seu e-mail é", email, "e o seu telefone é", telefone);

//Desafio 2 - Cálculo de idade a partir do ano de nascimento
let anoNascimento = Number(prompt("Digite o ano do seu nascimento: "));
let idade = 2025 - anoNascimento;
console.log("Sua idade em 2025 será:", idade);

