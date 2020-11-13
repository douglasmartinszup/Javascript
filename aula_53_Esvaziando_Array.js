//como esvaziar um array



let numeros = [1,2,3,4,5,6,];
let outros = numeros;

console.log('Metodo 1');
//primeira maneira 
numeros = [];

console.log(numeros);
console.log(outros);
//não apaga se outra variavel estiver usando esses valores


//segunda maneira

console.log('Metodo 2');
let numeros2 = [1,2,3,4,5,6,];
let outros2 = numeros2;

numeros2.length = 0 ;

console.log(numeros2);
console.log(outros2);


//terceira solução
console.log('Metodo 3');

let numeros3 = [1,2,3,4,5,6,];
let outros3 = numeros3;

numeros3.splice(0,numeros3.length);

console.log(numeros3);
console.log(outros3);


//Quarta maneira
console.log('Metodo 4');

let numeros4 = [1,2,3,4,5,6,];
let outros4 = numeros4;


while (numeros4.length > 0)
numeros4.pop();

console.log(numeros4);
console.log(outros4);

//by Doug Caval