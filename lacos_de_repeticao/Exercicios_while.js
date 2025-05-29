//1. Digite seu nome de usuário
*/let nome = prompt("Digite o seu nome: ")
while(nome !== "Grazielle"){
    console.log("Nome incoreto!")
    let nome = prompt("Digite o seu nome: ")
}
console.log("Nome correto!")
*/


//Criação de senha válida
*/let senha = prompt("Digite a sua senha: ")
while(senha != 1234){
    console.log("Senha incorreta!")
  let senha = prompt("Digite a sua senha: ")  
}
*/
 
//3. Confirmação de senha
/*let senha = prompt("Digite a sua senha: ")
let confirmacao = prompt("Confirme a sua senha: ")

while(true){
    if  (senha === confirmacao){
      console.log("Senha confirmada com sucesso!")  
      break
    }
    else {
        console.log("As senhas não são iguais, Tente novamente!")
        break
    }
  
}
*/

//4. Simulação de login  
/*let usuario,senha
usuario = prompt("Usuario: ")
senha = prompt("Senha: ")
while(usuario !== "Grazielle" || senha != "1908"){
    usuario = prompt("Usuario: ")
    senha = prompt("Senha: ")
}
*/

//5. Login com mensagem de erro
/*let usuario,senha
usuario = prompt("Usuario: ")
senha = prompt("Senha: ")
while(usuario !== "Grazielle" || senha != "1908"){
    console.log("Usuario ou senha incorretos!")
    usuario = prompt("Usuario: ")
    senha = prompt("Senha: ")
}
*/

//6. Login com número limitado de tentativas
/*let usuarioCorreto = "admin"
let senhaCorreta = "1234"
let tentativas = 0

while (tentativas < 3) {
    let usuario = prompt("Digite o nome de usuário:")
    let senha = prompt("Digite a senha:")

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Login realizado com sucesso!")
        break;
    }
    console.log("Usuário ou senha incorretos.")
    tentativas++
}
if (tentativas === 3) {
    console.log("Acesso bloqueado.")
}
*/

//7. Cadastro e login
/*let nomeCadastrado = prompt("Cadastre seu nome:")
let senhaCadastrada = prompt("Cadastre sua senha:")
console.log("Agora faça o login:")

let nomeDigitado = prompt("Digite seu nome:")
let senhaDigitada = prompt("Digite sua senha:")

while (nomeDigitado !== nomeCadastrado || senhaDigitada !== senhaCadastrada) {
    console.log("Nome ou senha incorretos. Tente novamente.")
    nomeDigitado = prompt("Digite seu nome:")
    senhaDigitada = prompt("Digite sua senha:")
}
console.log("Login realizado com sucesso!")
*/

//8. Login com "Esqueci minha senha"
/*let nomeCadastrado = prompt("Cadastre seu nome:")
let senhaCadastrada = prompt("Cadastre sua senha:")
console.log("Agora faça o login:")

let nomeDigitado = prompt("Digite seu nome:")
let senhaDigitada = prompt("Digite sua senha:")

while (nomeDigitado !== nomeCadastrado || senhaDigitada !== senhaCadastrada) {
    console.log("Nome ou senha incorretos.")
    let resposta = prompt("Esqueceu a senha? (Sim/Não)")
    if (resposta === "Sim" || resposta === "sim") {
        console.log("Sua senha cadastrada é: " + senhaCadastrada);
    }
    nomeDigitado = prompt("Digite seu nome:")
    senhaDigitada = prompt("Digite sua senha:")
}
console.log("Login realizado com sucesso!")
*/

//9. Sistema com login e logout
let usuario = prompt("Usuario: ")
let senha = prompt("Senha: ")

while (usuario !== "Grazielle" || senha !== "1908") {
    console.log("Nome ou senha incorretos.")
    usuario = prompt("Usuario: ")
    senha = prompt("Senha: ")
}
    console.log("Você está logado!")
let comando = prompt("Digite 'sair' para fazer logout:")
while (comando !== "sair"){
    comando = prompt("Comando inválido. Digite 'sair' para fazer logout:")
}
console.log("Você saiu do sistema.")