// Criando o objeto livro com as propriedades necessárias
const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
    genero: "Ficção",
    idadePublicacao: new Date().getFullYear() - 1988, // Calculando a idade de publicação
    avaliacao: 5 // Propriedade avaliacao para excluir depois
};

// Exibindo os detalhes do livro antes da exclusão
console.log("Detalhes do livro antes da exclusão da avaliação:");
console.log(livro);

// Excluindo a propriedade avaliacao do objeto livro
delete livro.avaliacao;

// Exibindo os detalhes do livro após a exclusão
console.log("\nDetalhes do livro após a exclusão da avaliação:");
console.log(livro);
