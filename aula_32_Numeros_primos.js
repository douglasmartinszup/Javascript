//Criar uma função que retorna números primos

//Primos
//Compostos

//chamar a função
exibirNumerosPrimos(15);

//criar a função
function exibirNumerosPrimos(limite) {
  //será dividido por número de 2 até o valor atribuido ao limite
  for (let numero = 2; numero <= limite; numero++) {
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        ehPrimo = false;
        break;
      }
    }
    if (ehPrimo) console.log(numero);
  }
}

//by Doug Caval
