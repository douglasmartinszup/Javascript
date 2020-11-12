//Exercicio Nota Escolar
//Obter média a partir de uma array


//0-59:F
//60-69:D
//70-79:C
//80-89:B
//90-100:A

const array = [70,70,80];
//média para este é 75


//exibir a média do aluno de acordo com os valores no array
console.log(mediaDoAluno(array));
//a nota do aluno foi 
console.log(calcularMedia());
//para ficar melhor por minha conta 
console.log('A nota do aluno foi :',calcularMedia(), ', portanto sua classificação foi ', mediaDoAluno());




//função apra calcular a nota baseada na média 
function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
    
    //um cenário para cada ocasião
    if (media < 59) return 'F';
    if (media <69) return 'D';
    if (media <79) return 'C';
    if (media <89) return 'B';
    return 'A'


}

//funcção apra calcular a média 
function calcularMedia() {
    //criei uma variável soma com valor inicial zero
    let soma = 0;

    //usei loop for para determinar que valor será valorizado através do array
    for (let valor of array) {
     // a variavel soma é os valores de valor que foram tirados do array
        soma += valor;
    }
    //retornar soma dividido pelos valores do array
    return soma/(array.length);
}

