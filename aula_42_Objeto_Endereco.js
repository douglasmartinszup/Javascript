//Objeto endereço

let endereco = {
  rua: "Lambari ",
  cidade: "Uberlândia",
  CEP: 38400120,
};

function exibirEnd(endereco) {
  for (let chave in endereco) {
    console.log(chave, endereco[chave]);
  }
}

exibirEnd(endereco);

//by Doug Caval
