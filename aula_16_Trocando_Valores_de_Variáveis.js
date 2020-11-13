//Trocando valor de variáveis

let a = "letra a";
let b = "letra b";

console.log("A primeira variável é ", a, " e a segunda variável é ", b);
//aqui ainda não ocorre a variação pois a alteraçao está
//após o primiero console.log

let c = a;
//para trocar o valor não escrevo mais "let",
// apenas a variavel e o novo valor
a = b;
b = c;
console.log("Agora a primeira variável é ", a, " e a segunda variável é ", b);
console.log(a, b);

//by Doug Caval
