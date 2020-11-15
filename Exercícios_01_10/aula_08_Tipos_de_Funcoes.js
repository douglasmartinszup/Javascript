//Tipos de funções

//Execução Simples
function dizerMeuNome() {
  console.log("Exibinda a primeira função simples");
}

dizerMeuNome();

//executando uma operação aritimtica
function multiplicarValor(valor) {
  return valor * 2;
}
console.log("Exibindo a segunda função aritimética :", multiplicarValor(5));

//posso atribuir essa função a uma variável
let soma = multiplicarValor(10);

console.log('Exibindo a terceira "função" dentro de uma variável:', soma);

//by Doug Caval
