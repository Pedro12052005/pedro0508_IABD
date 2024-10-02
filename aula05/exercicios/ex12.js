// Criando o objeto livro com as propriedades necessárias
const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
    genero: "Ficção",
    idadePublicacao: new Date().getFullYear() - 1988,
    avaliacao: 5 // Propriedade para ser excluída depois
};

// Exibindo os detalhes do livro antes da exclusão
console.log("Detalhes do livro antes da exclusão da avaliação:");
console.log(livro);

// Excluindo a propriedade avaliacao do objeto livro
delete livro.avaliacao;

// Exibindo os detalhes do livro após a exclusão
console.log("\nDetalhes do livro após a exclusão da avaliação:");
console.log(livro);

// Criando o objeto pessoa com os campos solicitados
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
    seguroSocial: "123-45-6789",
    cpf: "123.456.789-00"
};

// Função para exibir as informações da pessoa com CPF e carteira de identidade truncados
function exibirDetalhesPessoa(pessoa) {
    const cpfTruncado = pessoa.cpf.slice(0, 7) + '...'; // Mantém os 4 primeiros dígitos
    const identidadeTruncada = pessoa.carteiraIdentidade.slice(0, 7) + '...'; // Mantém os 4 primeiros dígitos

    console.log("\nDetalhes da pessoa:");
    console.log("Nome:", pessoa.nome);
    console.log("Data de Nascimento:", pessoa.dataNascimento);
    console.log("Carteira de Identidade:", identidadeTruncada);
    console.log("Email:", pessoa.email);
    console.log("Telefone:", pessoa.telefone);
    console.log("Cidade:", pessoa.cidade);
    console.log("Estado:", pessoa.estado);
    console.log("Seguro Social:", pessoa.seguroSocial);
    console.log("CPF:", cpfTruncado);
}

// Exibindo os detalhes da pessoa
exibirDetalhesPessoa(pessoa);
