//Combinando e dividindo Arrays

console.log('Metodo somado');
const primeiroArray = [1,2,3];
const segundoArray = [4,5,6];


const combinado = primeiroArray.concat(segundoArray);
console.log(combinado);



//Dividir um Array
console.log('Metodo Dividido');
const dividido = combinado.slice(0,3);
console.log(dividido);


//com referencia dentro do objeto
console.log('Metodo com referência dentro de um objeto');
const primeiroArrayR = [{id:501}];
const segundoArrayR = [4,5,6];

//vou alterar os valores dentro do objeto 
primeiroArrayR[0].id = 403;

//e continuar combinando os valores com essa alteração 
const combinado2 = primeiroArrayR.concat(segundoArrayR);
console.log(combinado2);

//by Doug Caval