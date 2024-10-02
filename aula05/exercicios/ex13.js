// Criando o objeto estudante
const estudante = {
    nome: "Maria Silva",
    matricula: 123456,
    curso: "Ciência da Computação",
    materias: [
        "Programação I",
        "Estruturas de Dados",
        "Algoritmos",
        "Banco de Dados"
    ]
};

// Exibindo os detalhes do estudante
console.log("Detalhes do Estudante:");
console.log("Nome:", estudante.nome);
console.log("Matrícula:", estudante.matricula);
console.log("Curso:", estudante.curso);
console.log("Matérias:", estudante.materias.join(", "));
