//Encontrando elementos pelo tipo de referencia

const marcar = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];

let found = marcar.find( function(element){
    return element.nome === 'a';
});

console.log(found);

//Ele retornará um objeto que contenha algo com o valor passado
