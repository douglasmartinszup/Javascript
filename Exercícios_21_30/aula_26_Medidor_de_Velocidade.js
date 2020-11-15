//Medidor de velocidade

//Velocidade máxima de 70 km/h
//A cada 5 km acima do limite você perde 1 ponto na carteira
//usar math.floor() para arredondar os numeros par baixo
//mais de 12 pontos carteira suspendida

verificarVelocidade(180);

//função
function verificarVelocidade(velocidade) {
  //constante de velocidade máxima permitida
  const velocidadeMax = 70;
  //constante de quantidade de km excedido por ponto
  const kmPorPontos = 5;

  if (velocidade <= 70) console.log("Velocidade aprovada");
  else {
    //uso do math.floor para arredondar os pontos quando a velocidade não for multipla de 5
    const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPontos);
    if (pontos >= 12) console.log("Carteira suspensa");
    else console.log("Você perdeu ", pontos, " pontos na carteira !");
  }
}

//by Doug Caval
