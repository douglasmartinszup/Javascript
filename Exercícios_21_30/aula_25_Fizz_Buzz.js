

// fizzBuzz compara valores e retorna resultado

//Divisível por 3 retorna fizz
//Divisivel por 5 retorna buzz
//Divisivel por 3 e 5 retorna fizzBuzz
//Não divisivel nem por 3 nem por 5 retorna o mesmo valor 
//Se NaN ele diz que não é um número
//Se string ele diz que não é um número

const doug = fizzBuzz('curso');
console.log(doug);

function fizzBuzz(entrada){
    //se for divisivel por 3 e 5 
    if (entrada % 3 === 0  && entrada % 5 === 0 )
    return 'FizzBuzz';
    //se entrada não for um número
    if (typeof entrada !== 'number')
    return 'Não é um número';
    //se entrada for divisivel por 3
    if (entrada % 3 === 0 )
    return 'Fizz';
    //se entrada for divisivel por 5
    if (entrada % 5 === 0 )
    return 'Buzz';
    
    return entrada;

}
//by Doug caval

