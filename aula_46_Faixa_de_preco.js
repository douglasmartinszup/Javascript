//Faixa de preço

//Criar array de objetos de faixa de preços 

let preco = [
    
        {tooltip: 'até 700 reais',minimo: 0 , máximo: 700},
        {tooltip: 'até 700 reais a 1000 reais',minimo: 0 , máximo: 1000},
        {tooltip: '1000 reais ou mais',minimo: 0 , máximo: 9999999}   
];

console.log(preco);

//Usando a FActory Funciton

function criarPreco(tooltip,minimo,maximo){
    return{
    tooltip,
    minimo,
    maximo
    }

};

let novoPreco = [
    criarPreco('a','b','c'),
    criarPreco('a','b','c'),
    criarPreco('a','b','c'),
];

console.log(novoPreco);
