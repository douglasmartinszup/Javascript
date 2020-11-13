//Constantes

//diferente das variáveis let e var , as const não podem ser lateradas ou ter valores atribuidos

//Exemplo de alteração em var

var original = "original";
console.log("Aqui ela ainda vem com o valor original :");
console.log(original);

//alterando
var original = "falso";
console.log("Aqui ela vem com o valor já alterado:");
console.log(original);

//Agora com a Const

const atual = "atual";
//alterando
const atual = "alterada";
console.log(atual);

//Você recebrá esta mensagem no output
// SyntaxError: Identifier 'atual' has already been declared

//by Doug Caval
