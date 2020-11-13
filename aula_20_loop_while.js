//precisa declarar a variavel fora do loop

let doug = 20;

//usa a variavel dentro do loop
// neste caso regressivo a partir do valor que atribui a variável

//pedi para fazer contagem regressiva apenas de números impares
//if resultaado da divisão doug % 2 for diferente de zero

while (doug >= 1) {
  //Se doug dividido por 2 tiver resto diferente de zero
  if (doug % 2 !== 0) {
    //imprima
    console.log("É assim que usa o while loop", doug);
  }
  doug--; //contagem regressiva
}

//by Doug Caval
