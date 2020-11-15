//Criar uma funcção que exibe a quantidade de asteriscos
//que aquela linha possui

//chamando a função
exibirAsteriscos(50);

function exibirAsteriscos(linhas) {
  //criar uma variável
  let padrao = "";

  //usando o loop for
  for (let linha = 1; linha <= linhas; linha++) padrao += "*";
  console.log(padrao);
}

//acrescenta a quantidade de asteriscos setados na função

//by Doug Caval
