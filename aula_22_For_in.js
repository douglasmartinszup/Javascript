//for
//while
//do-while

//utilizando o loop for in

//Exemplo

//para este caso eu criei uma const pois ela não será alterada por funçao nenhuma
const pessoa = {
  nome: "Doug",
  idade: 36,
};

//dentro da const temos : nome (key) e Doug(valor)

for (let chave in pessoa) {
    console.log(chave);
}


//se quiser ver o valor que está em cada chave preciso acessar a propriedade 
//pode ser por dotNotation ou por colchetes 

//dotNotation

for (let chave in pessoa) {
    console.log(chave,pessoa.nome);
}

//colchetes

for (let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

//como seria acessar uma array de cores 

const cores = ['vermelho', 'amarelo', 'azul', 'verde'];

//parra acessar um array é necessário definir um índice 

for (let indice in cores){
    console.log(indice);
}

//chamando as propriedades do objeto 

for (let indice in cores){
    console.log(indice,cores[indice]);
}