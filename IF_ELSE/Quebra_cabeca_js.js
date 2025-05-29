//Quebra Cabeça JS
//Codigo 1
let idade = prompt("Digite a sua idade: ") // declarar a variavel com atribuição de valor
let categoria // declarar a variável sem declaração de valor

if (idade >= 12 && idade < 18) { // Condição
    categoria = "Adolescente" // variável com declaração de valor
    console.log("Idade final: ", idade) // apresenta no console
    console.log("Categoria: ", categoria) // apresenta no console
} 
else if (idade >= 60) { // Condição
    categoria = "Idosa" // variável com declaração de valor
    console.log("Idade final: ", idade) // apresenta no console
    console.log("Categoria1: ", categoria) // apresenta no console
} 
else if (idade < 12) { // Condição
    categoria = "Criança" // variável com declaração de valor
    console.log("Idade final: ", idade) // apresenta no console
    console.log("Categoria: ", categoria) // apresenta no console
} 
else if (idade > 18 && idade < 60) { // Condição
    categoria = "Adulta" // variável com declaração de valor
    console.log("Idade final: ", idade) // apresenta no console
    console.log("Categoria: ", categoria) // apresenta no console
} 
else { // Condição
    categoria = "Categoria inválida" // variável com declaração de valor
    console.log("Idade final: ", idade) // apresenta no console
    console.log("Categoria: ", categoria) // apresenta no console
}

// Código 2
// Direito ao voto
let idade = prompt("Digite a sua idade: ") // variável com declaração de valor

if (idade >= 18 && idade < 70) { // Condição
    console.log("Voto obrigatório.") // apresenta no console
} 
else if ((idade >= 16 && idade < 18) || idade >= 70) { // Condição
    console.log("Voto facultativo.") // apresenta no console
} 
else if (idade <= 16) { // Condição
    console.log("Não vota.") // apresenta no console
} 
else { // Condição
    console.log("Idade inválida") // apresenta no console
}

//Código 3
let numero = prompt("Digite um número: ") // variável com declaração de valor

if (numero < 0) { // Condição
    console.log("Negativo") // apresenta no console
} 
else if (numero > 0) { // Condição
    console.log("Positivo") // apresenta no console
} 
else if (numero == 0) { // Condição
    console.log("Zero") // apresenta no console
} 
else { // Condição
    console.log("Número invalido") // apresenta no console
}

// Código 4
// Tipos de Combustível
let combustivel = prompt("Digite um combustível: ") // variável com declaração de valor

if (combustivel === "Gasolina" || combustivel === "gasolina") { // Condição
    console.log("Você escolheu Gasolina") // apresenta no console
} 
else if (combustivel === "Álcool" || combustivel === "álcool") { // Condição
    console.log("Você escolheu Álcool") // apresenta no console
} 
else if (combustivel === "Diesel" || combustivel === "diesel") { // Condição
    console.log("Você escolheu Diesel") // apresenta no console
} 
else { // Condição
    console.log("Opção inválida") // apresenta no console
}

// Código 5
// Velocímetro
let velocidade = prompt("Digite a sua velocidade: ") // variável com declaração de valor

if (velocidade <= 60) { // Condição
    console.log("Dentro do limite") // apresenta no console
} 
else if (velocidade == 75) { // Condição
    console.log("Atenção") // apresenta no console
} 
else if (velocidade >= 80) { // Condição
    console.log("Multado") // apresenta no console
} 
else { // Condição
    console.log("Velocidade inválida") // apresenta no console
}