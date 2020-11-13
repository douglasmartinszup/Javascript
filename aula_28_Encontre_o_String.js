//Criar um método par aler propriedades de um objeto
// e exibir somente  as propriedades do tipo string que stão neste objeto


//criando um objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Doug Caval',
    personagem:'Thor',
}


//chamando a função com um parametro dentro 
exibirPropriedades(filme);

// criando a função

function exibirPropriedades(objeto) {
    //utilizei o loop for para fazer uma iteração da propriedade do objeto
    for (prop in objeto)
    //se do tipo do objeto sua propriedade for string 
    if(typeof  objeto[prop]==='string')
    //retorna o tipo propriedade e o objeto indexado da propriedade
    console.log(prop, objeto[prop])

}

