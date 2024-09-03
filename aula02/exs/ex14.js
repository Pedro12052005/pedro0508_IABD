const nota1 = 9;
const nota2 = 8;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
const status = media >= 6 ? "Aprovado" : (media > 4 ? "Exame" : "Reprovado");

console.log(`A média do aluno é: ${media.toFixed(2)}`);
console.log(`Status do aluno: ${status}`);
