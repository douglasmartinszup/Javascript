//Tipos de funções


function dizerMeuNome(){
    console.log('Doug Caval');
}

dizerMeuNome();

function multiplicarValor(valor){
    return valor * 2;

}

console.log(multiplicarValor(5));

//posso atribuir essa função a uma variável

let soma = multiplicarValor(10);

console.log(soma);