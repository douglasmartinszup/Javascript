//Igualdade entre objetos

function endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep 
}

const endereco1 = new endereco('a', 'b', 'c');
const endereco2 = new endereco('d','e','f');
const endereco3 = endereco1;

function saoIguais(endereco1,endereco2){
    //comparar as propriedades
    return endereco1.rua == endereco2.rua &&
    endereco1.cidade == endereco2.cidade &&
    endereco1.cep == endereco2.cep


}
console.log(saoIguais(endereco1,endereco2));

function enderecoMemoriaSaoIguais(){
    //comparando tipos 
    return endereco1 === endereco3

}
console.log(enderecoMemoriaSaoIguais(endereco1,endereco3));