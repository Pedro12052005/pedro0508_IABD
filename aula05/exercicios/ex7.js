// Criando o objeto livro com as propriedades necessárias
const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
    genero: "Ficção",
    idadePublicacao: new Date().getFullYear() - 1988 // Calculando a idade de publicação
};

// Acessando e imprimindo os detalhes do livro utilizando colchetes
console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de Publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade de Publicação:", livro["idadePublicacao"], "anos");
