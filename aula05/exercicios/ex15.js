// infoPessoa.js

// Criando o objeto pessoa com as propriedades necessárias
const pessoa = {
    nome: "Lucas Oliveira",
    idade: 30,
    solteiro: true,
    hobbies: ["futebol", "fotografia", "programação"],
    endereco: {
        rua: "Avenida da Liberdade",
        cidade: "São Paulo",
        estado: "SP"
    }
};

// Função para mostrar as informações da pessoa
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log("Nome:", pessoa.nome, "| Tipo:", typeof pessoa.nome);
    console.log("Idade:", pessoa.idade, "| Tipo:", typeof pessoa.idade);
    console.log("Solteiro:", pessoa.solteiro, "| Tipo:", typeof pessoa.solteiro);
    console.log("Hobbies:", pessoa.hobbies.join(", "), "| Tipo:", typeof pessoa.hobbies);
    console.log("Endereço:");
    console.log("  Rua:", pessoa.endereco.rua, "| Tipo:", typeof pessoa.endereco.rua);
    console.log("  Cidade:", pessoa.endereco.cidade, "| Tipo:", typeof pessoa.endereco.cidade);
    console.log("  Estado:", pessoa.endereco.estado, "| Tipo:", typeof pessoa.endereco.estado);
}

// Chamando a função para mostrar as informações da pessoa
mostrarInfoPessoa(pessoa);
