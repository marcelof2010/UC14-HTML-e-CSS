//O projeto: calculadora de IMC

/* Classificação
Abaixo de 18,5 - Abaixo do peso
18,5 a 24,9 - Peso normal
25 a 29,9 - Sobrepeso
30 a 34,9 - Obesidade grau I
35 a 39,9 - Obesidade grau II
40 ou mais - Obesidade grau III */

let nome    = prompt('Qual é o seu nome?');
let pesoStr = prompt(`Olá, ${nome}! Qual é o seu peso em kg?\n(use 
vírgula ou ponto - ex: 75,5 ou 75.5)`);
let altStr = prompt('Qual é a sua altura em metros?\n(ex: 1,75 ou 1.75)'); 


let peso = Number(pesoStr.replace(',',','));
let alt = Number(altStr.replace(',', ','));

console.log('Nome:' , nome);
console.log('Peso:', peso, typeof peso);
console.log('Altura:', alt, typeof alt);

let IMC = peso / (alt * alt);
let IMCFormatado = IMC.toFixed(1);