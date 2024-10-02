// Criando um array vazio chamado clinica
let clinica = [];

// Simulando a chegada de três animais diferentes
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Coelho");

// Exibindo a lista de animais na clínica
console.log("Animais na clínica:", clinica);

// Removendo os animais da lista um por um
while (clinica.length > 0) {
    let animalRemovido = clinica.shift(); // Remove o primeiro animal da fila
    console.log("Animal atendido:", animalRemovido);
}

// Exibindo o estado final da lista
console.log("Estado final da lista de animais:", clinica);
