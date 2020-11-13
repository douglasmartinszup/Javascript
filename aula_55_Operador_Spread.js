//Operador Spread
//Copias e clonagens com ES6

//Combinando e dividindo Arrays

console.log("Metodo somado");
const primeiroArray = [1, 2, 3];
const segundoArray = [4, 5, 6];

const combinado = primeiroArray.concat(segundoArray);
console.log(combinado);

//Dividir um Array
console.log("Metodo Dividido");
const dividido = combinado.slice(0, 3);
console.log(dividido);


//como fazer o mesmo no ES6 usando o operador SPREAD


const combinadoSpread = [ ...primeiroArray,...segundoArray];

//também podemos inserir valores durante a concatenação SPREAD
console.log('Combinado SPREAD adição');
const combinadoSpreadAdicao = [...primeiroArray,'%',...segundoArray];
console.log(combinadoSpreadAdicao);

//como clonar um array

const clanadoSpread = [...combinadoSpread ];


//by Doug Caval