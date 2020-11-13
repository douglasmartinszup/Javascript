//Tipos Primitivos
//Tipos de referências e tipos de Valores

//Tipos de referência
//String, Number , Boolean, Undefined , Null

//String : Uma String nada mais é que texto puro
let string = "DougCaval"; //String literal , é nome que você dá quando junta várias letras em uma variável
console.log(string);

//Number : São os números, seja eles integer, float, double etc.
let number = 36; //Number literal , qualquer valor de número ( 36.1, .36, 36)
console.log(number);

//Boolean : São os operadores booleanos (true ou false)
let boolean = true; //Sé é verdadeiro ou não , poderia ser true ou false
console.log(boolean);

//Undefined :

let undefined; //Undefined não tem uma valor atribuido a variável
console.log(undefined);
//Null

let nula = null; // Quando inicia vazio e deixa a possibilidade para atribuir uma valor, porém smepre inicia null
console.log(nula);

//Array :É uma estrutura de dado para armazenÉ uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo.ar uma coleção de valores, sendo eles de qualquer tipo.
let array = [1, 2, 3, 4, 5];
console.log(array);

//Objetos : Conjunto de atributos aninhados a uma variável denomina-se um objeto.
let objeto = {
  key1: "valor1",
  key2: "valor2",
  key3: "valor3",
};
console.log(objeto);

//Functions : Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração. Obs: muito utilizado no paradigma de programação funcional.

let funcao = function () {
  console.log("Esta é uma variável declarada como função!");
};

funcao();

//Para descobrir o tipo , vá em concole no navegador  e digite typeof e o nome da variável
//Exemplo typeof nome , typeof idade , etc...

//by Doug Caval
