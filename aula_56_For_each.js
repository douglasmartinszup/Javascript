//For each ou "para cada"


const numeros = [1,2,3,4,5,6];

/*


//este metodo recebe uma função callback
numeros.forEach(function(numeros){
    console.log(numeros);
});

//com arrow function

numeros.forEach((numeros) =>
    console.log(numeros)
);

*/

numeros.forEach((numeros,indice) => console.log(numeros,indice));
let funcao = numeros
console.log(funcao);