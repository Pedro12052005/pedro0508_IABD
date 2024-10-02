// Criando o objeto livro com as propriedades necessárias
const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
    genero: "Ficção",
    idadePublicacao: new Date().getFullYear() - 1988, // Calculando a idade de publicação
    avaliacao: null // Inicializando a avaliação como null
};

// Exibindo os detalhes do livro antes da avaliação
console.log("Detalhes do livro antes da avaliação:");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade de Publicação:", livro.idadePublicacao, "anos");
console.log("Avaliação:", livro.avaliacao);

// Adicionando uma avaliação ao objeto
const novaAvaliacao = 5; // Exemplo de nova avaliação

if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao; // Atribuindo a nova avaliação
    console.log("Avaliação adicionada:", livro.avaliacao);
} else {
    console.log("O livro já possui uma avaliação:", livro.avaliacao);
}

// Exibindo os detalhes do livro após a avaliação
console.log("Detalhes do livro após a avaliação:");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade de Publicação:", livro.idadePublicacao, "anos");
console.log("Avaliação:", livro.avaliacao);
