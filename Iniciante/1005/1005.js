// Leia 2 valores de ponto flutuante de dupla precisão nota1 e nota2, 
//que correspondem a 2 notas de um aluno.
// nota1 = 3.5
// nota2 = 7.5
// Media com peso
// A soma de Cada nota vezes seu peso [depois]
// divida pela soma de todos os pesos

const pesoNota1 = 3.5;
const pesoNota2 = 7.5;

let nota1 = parseFloat(prompt('Digite a nota 1')).toFixed(2);
let nota2 = parseFloat(prompt('Digite a nota 2')).toFixed(2);

let mediaComPeso = ((nota1 * pesoNota1) + (nota2 * pesoNota2)) / (pesoNota1 + pesoNota2)

console.log('MEDIA = ' + mediaComPeso.toFixed(5))
console.log('MEDIA =', mediaComPeso.toFixed(5))