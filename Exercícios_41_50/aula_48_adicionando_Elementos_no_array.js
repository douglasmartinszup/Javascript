//Adicionando elementos a um array



let numeros = [1,2,3];
let numeros2 = [1,2,3];
let numeros3 = [1,2,3];


//no inicio
numeros.unshift('Doug');
console.log(numeros);

//no meio ( 0 indice no qual quero incerir,zero par não deletar nada, o item que quer inserir)
numeros2.splice(1,0,'Doug');
console.log(numeros2);

//no fianal
numeros3.push('Doug');
console.log(numeros3);


//by Doug Caval
