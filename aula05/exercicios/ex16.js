// Criando a lista de pessoas
const pessoas = [
    {
        nome: "Lucas Oliveira",
        idade: 30,
        cidade: "São Paulo"
    },
    {
        nome: "Maria Silva",
        idade: 25,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "João Santos",
        idade: 28,
        cidade: "Belo Horizonte"
    },
    {
        nome: "Ana Costa",
        idade: 22,
        cidade: "Curitiba"
    },
    {
        nome: "Pedro Almeida",
        idade: 35,
        cidade: "Porto Alegre"
    }
];

// Exibindo a lista de pessoas
console.log("Lista de Pessoas:");
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
});