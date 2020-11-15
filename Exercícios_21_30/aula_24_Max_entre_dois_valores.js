//determinar valor máximo entre dois valores

//escrever uma funçao que usa dois números e retorna o maior entre eles


//criei uma variável para receber a funcção que irei criar 
let valorMaior = maxNumber2(12,18);
console.log(valorMaior);

//criei a função e fiz um if/else para retornar os valores 

function maxNumber (numero1,numero2){
    if(numero1 > numero2)
    return numero1;
    else return numero2;

}

//maneira mais simples e limpa com operadores ternários ( && ,|| )

function maxNumber2 (numero1,numero2){
   return numero1>numero2 ? numero1:numero2;
//se numero1 for maior que numero2 (? retorne) numero1 (: caso contrário) retorne numero2
}

//by Doug Caval
