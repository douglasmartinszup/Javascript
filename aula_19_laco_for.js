//laço de repetição uilizando o for

// doug = 0 : a variavel doug inicia em zero
// doug < 10 : a variavel doug seja menor que 10
// doug++ : a esta variavel doug seja acescentado + 1 a cada execução

for (let doug = 0; doug < 10; doug++) {
  console.log("É assim que usa o for ", doug);
}

// posso determinar o inicio com qualquer valor que eu quiser atribuir a variavel doug
// posso tambem terminar um If ou switch dentro do for
for (let doug = 0; doug < 10; doug++) {
  if (doug % 2 !== 0) {
    console.log("É assim que usa o for para somente números impares ", doug);
  }
}

// assim também

for (let doug = 0; doug < 10; doug++) {
  if (doug % 2 === 0) {
    console.log("É assim que usa o for para somente números pares ", doug);
  }
}

// é possível também fazer de forma decrescente
// doug-- :neste caso eu uso o doug--
// doug=10 :uso a variavel doug com um numero maior
// doug > 0 : estabeleço o limite minimo se for necessário

for (let doug = 10; doug > 0; doug--) {
  console.log("É assim que usa o for de forma decrescente ", doug);
}
