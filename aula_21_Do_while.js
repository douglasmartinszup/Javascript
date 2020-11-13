//do..while

// determino uma varialvel que será usada dentro do do...while
let doug = 0;

//crio o do {parametros} e dentro dele chamo o while

do {
  console.log("Executando o do !", doug);
  doug++; //nunca esqueca de usar a variavel++ ou variavel--
  //para que ele  não fique no mesmo valor e execute para sempre
} while (doug < 10);
