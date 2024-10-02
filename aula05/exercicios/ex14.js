// infoPessoa.js

// Criando o objeto pessoa com as propriedades necessárias
const pessoa = {
    nome: "Lucas Oliveira",
    idade: 30,
    solteiro: true,
    hobbies: ["futebol", "fotografia", "programação"]
};

// Função para mostrar as informações da pessoa
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log("Nome:", pessoa.nome, "| Tipo:", typeof pessoa.nome);
    console.log("Idade:", pessoa.idade, "| Tipo:", typeof pessoa.idade);
    console.log("Solteiro:", pessoa.solteiro, "| Tipo:", typeof pessoa.solteiro);
    console.log("Hobbies:", pessoa.hobbies.join(", "), "| Tipo:", typeof pessoa.hobbies);
}

// Chamando a função para mostrar as informações da pessoa
mostrarInfoPessoa(pessoa);
