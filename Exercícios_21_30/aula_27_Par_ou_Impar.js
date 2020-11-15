//par ou impar

//Receber uma quantidade de valores para avaliar
//Função exibe se o valor é par ou impar

exibirTipo(2);

function exibirTipo(limite) {
  //usei o for para determinar que vai iniciar no zero e terminar no valor de determinei em limite
  for (let i = 0; i <= limite; i++) {
    //se o número for par , divide por 2  e não pode haver resto
    if (i % 2 === 0) console.log("Este número ", i, " é par ");
    //se o número for ímpar eu divido por 2 e tem que ter resto
    else console.log("Este número ", i, " é ímpar ");
  }
}

//by Doug Caval
