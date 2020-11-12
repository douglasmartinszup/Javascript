//Factory Function

//criação de um objeto
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

//Factory function

function criarCelular() {
  const celular = {
    marcaCelular: 'LG',
    tamanhoTela: {
      vertical: 155,
      horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function () {
      console.log("fazendo ligação!...");
    },
  };
  return celular;
}

criarCelular();




//OU

function criarCelular2() {
  return {
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
};

criarCelular2();

//Tornando os parametros mais dinâmicos

function criarCelular3(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
      marcaCelular: marcaCelular,
      tamanhoTela: tamanhoTela,
      capacidadeBateria: capacidadeBateria,
      ligar: function () {
        console.log("fazendo ligação!...");
      },
    };
  };
  
  criarCelular3();

  
const celular3_1 = criarCelular3('IPHONE',160,9000);
console.log(celular3_1);



//se eu passar novos valores

const celular3 = criarCelular3('NOKIA', 200,6000);
console.log(celular3);



//Evoluindo quando chave e valor tem o mesmo nome 

function criarCelular4(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar: function () {
        console.log("fazendo ligação!...");
      },
    };
  };
  
  criarCelular4();

  //Evoluindo a função dentro
  function criarCelular5(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar() {
        console.log("fazendo ligação!...");
      },
    };
  };

  criarCelular5();

