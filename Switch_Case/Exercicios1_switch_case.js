//Exercicios 1 - Switch Case 
// exercicio 1
let idioma = prompt("Digite o seu idioma: ");
switch (idioma) {
case "português":
case "portugues":
case "pt":
case "Portugues":
case "Português":
console.log("Olá! Bem-vindo!");
break;
case "inglês":
case "ingles":
case "en":
case "Inglês":
case "Ingles":
case "english":
case "English":
console.log("Hello! Welcome!");
break;
case "espanhol":
case "es":
case "Espanhol":
case "español":
case "spanish":
case "Spanish":
case "Español":
console.log("¡Hola! ¡Bienvenido!");
break;
case "japonês":
case "japones":
case "ja":
case "Japones":
case "Japonês":
console.log("こんにちは！ようこそ");
break;
default:
console.log("Idioma não reconhecido. Usando Português: Olá!");
}

// exercicio 2
let dia = parseInt(prompt("Digite o número do dia da semana: "));
switch (dia) {
case 1:
console.log("Hoje é Domingo!");
break;
case 2:
console.log("Hoje é Segunda-feira!");
break;
case 3:
console.log("Hoje é Terça-feira!");
break;
case 4:
console.log("Hoje é Quarta-feira!");
break;
case 5:
console.log("Hoje é Quinta-feira!");
break;
case 6:
console.log("Hoje é Sexta-feira!");
break;
case 7:
console.log("Hoje é Sábado!");
break;
default:
console.log("Número inválido.");
}

// exercicio 3
let veiculos = parseInt(prompt("Digite o número do veículo (1 - Carro, 2 - Bicicleta, 3 - Ônibus):"));
switch (veiculos) {
case 1:
console.log("Você escolheu Carro!");
break;
case 2:
console.log("Você escolheu Bicicleta!");
break;
case 3:
console.log("Você escolheu Ônibus!");
break;
default:
console.log("Opção inválida. Digite 1, 2 ou 3.");
}

// exercicio 4
let urgencia = parseInt(prompt("Digite o nível de urgência (1 - Baixa, 2 - Média, 3 - Alta):"));
switch (urgencia) {
case 1:
console.log("Urgência Baixa.");
break;
case 2:
console.log("Urgência Média");
break;
case 3:
console.log("Urgência Alta");
break;
default:
console.log("Nível inválido. Digite 1, 2 ou 3.");
}

// exercicio 6
let categoria = prompt("Digite a categoria do veículo (compacto, SUV, caminhão):");
switch (categoria) {
case "compacto":
console.log("Veículo compacto: ideal para cidades e economia de combustível.");
break;
case "suv":
console.log("SUV: mais espaço e potência para aventuras e famílias.");
break;
case "caminhão":
console.log("Caminhão: ideal para transporte de cargas pesadas.");
break;
default:
console.log("Categoria inválida. Digite compacto, SUV ou caminhão.");
}

// exercicio 7
let horas = parseInt(prompt("Digite o tempo de estacionamento em horas:"));
let tarifa;
switch (horas) {
case 1:
tarifa = 5;
break;
case 2:
tarifa = 10;
break;
case 3:
tarifa = 15;
break;
case 4:
tarifa = 25;
break;
default:
tarifa = 0;
break;
}
console.log(`Você ficou ${horas}h. Tarifa a pagar: R$ ${tarifa},00.`);

// exercicio 8
let dificuldade = parseInt(prompt("Digite o nível de dificuldade (1 - Baixa, 2 - Média, 3 - Alta):"));
switch (dificuldade){
case 1:
console.log("Modo Fácil selecionado.");
break;
case 2:
console.log("Modo Médio selecionado.");
break;
case 3:
console.log("Modo Difícil selecionado.");
break;
default:
console.log("Opção inválida. Escolha 1, 2 ou 3.");
}

// exercicio 9
let servico = prompt("Escolha um serviço: yoga, musculação ou personal trainer");
switch (servico){
case "yoga":
console.log ("Você escolheu aula de yoga");
break;
case "musculação":
console.log ("Você escolheu musculação");
break;
case "personal trainer":
console.log ("Você escolheu personal trainer");
break;
default:
console.log("Serviço não encontrado. Tente novamente.");
}

// exercicio 10
let ingresso = parseInt(prompt("Escolha a categoria de ingresso:\n1 - Estudante\n2 - Meia entrada\n3 - Inteira\n"));
let preco;
switch (ingresso) {
case 1:
preco = 10;
console.log ("Você escolheu estudante");
break;
case 2:
preco = 15;
console.log ("Você escolheu meia entrada");
break;
case 3:
preco = 30;
console.log ("Você escolheu inteira");
break;
default:
console.log("Categoria inválida.");
preco = null;
}
if (preco !== null) {
console.log(`Preço do ingresso: R$ ${preco},00`);
}

// exercicio 10 (repetido)
let idade = parseInt(prompt("Digite sua idade:"));
let dificuldade2;
switch (true) {
case (idade <= 12):
dificuldade2 = "Exercícios leves e lúdicos";
break;
case (idade <= 18):
dificuldade2 = "Exercícios moderados para desenvolvimento";
break;
case (idade <= 50):
dificuldade2 = "Exercícios intensos e de força";
break;
case (idade > 50):
dificuldade2 = "Exercícios leves e adaptados";
break;
default:
dificuldade2 = "Idade inválida";
}
console.log(`Faixa etária: ${idade} anos. Dificuldade recomendada: ${dificuldade2}`);

// exercicio 11
let genero = prompt("Digite o gênero musical (rock, jazz, samba, eletrônico):");
switch (genero) {
case "rock":
console.log("Instrumento recomendado: Guitarra elétrica");
break;
case "jazz":
console.log("Instrumento recomendado: Saxofone");
break;
case "samba":
console.log("Instrumento recomendado: Pandeiro");
break;
case "eletrônico":
console.log("Instrumento recomendado: Controladora de DJ");
break;
default:
console.log("Gênero não reconhecido.");
}

// exercicio 12
let area = prompt("Digite a área de interesse (front-end, back-end, mobile):");
switch (area) {
case "front-end":
console.log("Curso recomendado: HTML, CSS, JavaScript, React");
break;
case "back-end":
console.log("Curso recomendado: Node.js, Java, Python, Banco de Dados");
break;
case "mobile":
console.log("Curso recomendado: Flutter ou React Native");
break;
default:
console.log("Área não encontrada.");
}

// exercicio 13
let idadeAtleta = parseInt(prompt("Digite a idade do atleta:"));
let nivel;
switch (true) {
case (idadeAtleta <= 12):
nivel = "Iniciante";
break;
case (idadeAtleta <= 18):
nivel = "Intermediário";
break;
case (idadeAtleta <= 35):
nivel = "Avançado";
break;
default:
nivel = "Master";
}
console.log(`Idade: ${idadeAtleta} anos. Nível: ${nivel}`);

// exercicio 14
let categoria2 = prompt("Escolha a categoria (básico, intermediário, avançado):");
switch (categoria2) {
case "básico":
console.log("Desafios: Adição, subtração e lógica simples.");
break;
case "intermediário":
console.log("Desafios: Álgebra, frações, equações.");
break;
case "avançado":
console.log("Desafios: Geometria analítica, derivadas, problemas complexos.");
break;
default:
console.log("Categoria não reconhecida.");
}
