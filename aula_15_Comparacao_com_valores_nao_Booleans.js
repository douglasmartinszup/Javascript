//Falsy

//undefined
//nul
//0
//''
//NaN


//Truthy

let corPersonalizada ='vermelha';//defini uma cor personalizada
let corPadrao = 'Azul';//defini um cor padrão
let corPerfil = corPersonalizada || corPadrao;//pode ser cor personalizada ou cor padrão

//vair percorrer as variávei eo o primeiro que ele encontrar um valor
//que não seja :
//          -undefined
//          -nul
//          -0
//          -''
//          -NaN


//vai retornar esse valor 
console.log('Neste caso encontrou uma valor truthy  então pegou o valor da primeira variável')
console.log(corPerfil);
let corPersonalizada1 ='';//não defini uma cor personalizada
let corPadrao1 = 'Azul';//defini um cor padrão
let corPerfil1 = corPersonalizada1 || corPadrao1;//pode ser cor personalizada ou cor padrão


console.log('Neste caso não encontrou uma valor truthy  então pegou o valor da segunda variável')
console.log(corPerfil1);