let consumoWatt = 1750; 
let horasPorDia = 8;    
let diasPorMes = 25;    
let custoPorKWh = 0.75;  
let consumoKWhPorDia = consumoWatt / 1000; 
let consumoKWhMensal = consumoKWhPorDia * horasPorDia * diasPorMes;
let valorGasto = consumoKWhMensal * custoPorKWh;

console.log("O valor gasto com a energia da máquina é: R$", valorGasto.toFixed(2));
