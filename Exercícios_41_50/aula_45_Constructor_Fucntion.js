//criar um objeto postagem

//titulo,mensagem,  autor, visualizações, , comentários, aoVivo

function CriarPost(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.aoVivo = false
}

let post = new CriarPost('Javascript','Estudar é bom','Doug Caval',345,['parabéns','estou curtindo','continue assim'],true);
console.log(post);

//by Doug Caval