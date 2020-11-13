//Switch Case



//criei uma variável e determinei um valor inicial a ela 
let permissao = 'comum' ;


//criei um switch pois, dependendo do valor da variável eu 
//quero que retorne algo diferente

//coloco o nome da variável que vai determinar o case utilizado
switch (permissao) {
    //determinos os cases para cada valor conforme minha necessidade
    case 'comum' : console.log('Permissão para usuário comum');
    //sempre colocar o break para assim que encontarr o valor ele parar
    break;
    case 'admim' : console.log('Permissão para usuário Admin');
    break;
    //para não ficar criando muitos casos e para tudo eu uso o default 
    default : console.log('Este tipo não existe !')
}




//by Doug Caval