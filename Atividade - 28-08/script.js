let numero1 = 10;
let numero2 = 5;

console.log("Soma: " + (numero1 + numero2));
console.log("Subtração: " + (numero1 - numero2));
console.log("Multiplicação: " + (numero1 * numero2));
console.log("Divisão: " + (numero1 / numero2));

let numero = 7;

let dobro = numero * 2;
let triplo = numero * 3;

console.log("O dobro é: " + dobro);
console.log("O triplo é: " + triplo);

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos.");

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media);

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

// Pedindo as credenciais para o usuário
let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

// Validação passo a passo
if (usuario != usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha != senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}

let primeiroNumero = parseInt(prompt("Digite o primeiro número:"));
let segundoNumero = parseInt(prompt("Digite o segundo número:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior número é " + primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior número é " + segundoNumero);
} else {
    console.log("Os dois números são iguais!");
}