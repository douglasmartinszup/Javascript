//Arrow Fucntions

const marcar = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];

//Fucntion normal
let found = marcar.find(function (element) {
  return element.nome === "a";
});

//Arrow function
let found2 = marcar.find((element) => element.nome === "a");
console.log(found2);
