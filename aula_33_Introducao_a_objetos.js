//O que são objetos
//chave-valor ou (Key-Value pair)

//exemplo de como transformar em objeto

let marcaCelular = "LG";
let tamanhoTelaVertical = 155;
let tamanhoTelaHorizontal = 75;
let capaciadeBateria = 5000;

//como objeto

const celular = {
  marcaCelular: "LG",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log("fazendo ligação!...");
  },
};

celular.ligar();

console.log(celular.capacidadeBateria, celular.marcaCelular);
