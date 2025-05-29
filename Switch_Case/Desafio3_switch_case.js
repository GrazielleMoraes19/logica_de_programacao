//Desafio 3 - Switch Case
let sistema = prompt("Qual sistema operacional desejado? \n 1-Terminal Linux\n 2-Cmd Windows \nDigite aqui: ");
sistema = parseInt(sistema);

if (sistema == "Linux" || sistema == 1 || sistema == "linux") {
  console.log("Modo Linux ativado!");
  console.log("\n 1- ls");
  console.log("\n 2- cd");
  console.log("\n 3- rm");
  console.log("\n 4- mkdir");
  console.log("\n 5- clear");
  console.log("\n 6- cd..");
  console.log("\n 7- cp");
  console.log("\n 8- mv");
  console.log("\n 9- cat");
  console.log("\n 10- echo");

  let linux = prompt("Escolha o código que você deseja: ");

  switch (linux) {
    case "1":
      console.log("Função: O comando ls é usado para visualizar conteúdos\nem um diretório. Por padrão, esse comando vai mostrar os conteúdos apenas\ndo diretório atual em que você estiver.");
      break;
    case "2":
      console.log("Função: O comando cd (de change directory) permite\nmudar de diretório.\nExemplo:Para acessar o diretório: cd nome_do_diretorio");
      break;
    case "3":
      console.log("Função: O comando rm (de remove) é utilizado para\nremover arquivos e diretórios.\nExemplo:Para remover um arquivo: rm nome_do_arquivo\nPara remover um diretório e seu conteúdo: rm -r pasta/");
      break;
    case "4":
      console.log("Função: O comando mkdir (de make directory) é utilizado\npara criar novos diretórios (pastas) no sistema.\nExemplo: mkdir nome_do_diretorio");
      break;
    case "5":
      console.log("Função: O comando clear limpa o conteúdo da tela do\nterminal, removendo todas as linhas anteriores.\nEx
