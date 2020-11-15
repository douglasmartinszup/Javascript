//Operador Lógico com boolean

//And &&
console.log('Operador and &&  é "true" se os dois forem "true"');
console.log(true && true);
console.log(false && true);

//Ou ||
console.log('Operador ou ||  é "true" se um os dois forem "true"');
console.log(true || true);
console.log(false || true);

//Não ! Este pode ser um pouco confuso
//Se o retorno for false ele imprime true
//se o retorno for true ele retorna false
console.log("Operador not (!)");
let not = true;
let yes = false;

//aqui teve o retorno true , então ele retornou false
console.log("Aqui tivemos uma variável como true , então ele retorna :", !not);
//aqui teve o retorno false . então ele retornou true
console.log("Aqui tivemos uma variável como false , então ele retorna :", !yes);

//by Doug Caval
