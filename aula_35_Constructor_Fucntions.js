//Constructor Functions

/*
function criarCelular() {
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

console.log(criarCelular());

*/


//usando como constructor

//Pascal case
function Celular (marcaCelular,tamanhoTela,capacidadeBateria){
    //o this serve para referenciar o objeto atual
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação...')
    }


}

const novoCelular = new Celular('Asus','5.5',5000);
console.log(novoCelular);