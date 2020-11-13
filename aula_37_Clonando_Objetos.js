//Clonando objetos

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

const novoObjeto = Object.assign({}, celular);
console.log(novoObjeto);

//how make a spread

const novoObjeto2 = { ...celular };
console.log(novoObjeto2);

//by Doug caval
