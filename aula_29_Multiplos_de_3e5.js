//Criar uma função de soma  e retorna os multiplos de 3 e 5 dentro do valor passado e os soma

//primeiro armazenar os multipos de 3
//segundo armazenar os multiplos de 5
//somar os dois

somar(10);

function somar(limite) {
  //determinei as variaves onde serão armazenadas os valors extraidos
  let multiplos3 = 0;
  let multiplos5 = 0;

  //usei o for para determianar que os valores iniciem em zero, seja menor que o limite indicado e some 1 a cada loop
  for (i = 0; i <= limite; i++) {
    if (i % 3 === 0)
      //se for multiplo de tres  o i seja armazenado em multiplos3
      multiplos3 += i;
    if (i % 5 === 0)
      //se for multiplo de cinco o i seja armazenado em multiplos5
      multiplos5 += i;
  }

  //seja exibido o valor da soma das duas variaveis
  console.log(multiplos3 + multiplos5);
}


//by Doug Caval