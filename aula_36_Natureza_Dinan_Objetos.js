//Natureza dinâmica dos objetos


const mouse ={
    cor: 'red',
    marcar: 'dazz' 
}

//aqui vou aumentar mais uma propriedade dentro do objeto 
mouse.velocidade = 5000 ;
mouse.tamanho = 13;
//podemos inserir uma função
mouse.trocarDPI = function (){
    console.log('mudando DPI...');
}
//tambem podemos deletar 
delete mouse.velocidade;
console.log(mouse);


//ou seja fora do objeto ainda posso atribuir propriedades a ele 