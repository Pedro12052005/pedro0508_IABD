// Criando o objeto contaBancaria
const contaBancaria = {
    titular: "Lucas Oliveira",
    saldo: 1000,
    
    // Método para depositar valor
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    },

    // Método para sacar valor
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Erro: Saldo insuficiente para saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
};

// Criando o objeto cliente
const cliente = {
    nome: "Ana Costa",
    conta: contaBancaria
};

// Função para mostrar o saldo do cliente
function mostrarSaldo(cliente) {
    console.log(`Nome do Cliente: ${cliente.nome}`);
    console.log(`Saldo da Conta: R$${cliente.conta.saldo}`);
}

// Realizando operações de depósito e saque
cliente.conta.depositar(500); // Depósito de R$500
cliente.conta.sacar(200);      // Saque de R$200
cliente.conta.sacar(1500);     // Tentativa de saque de R$1500 (saldo insuficiente)

// Exibindo as informações atualizadas
mostrarSaldo(cliente);
