// Dados
let nomeCliente = "Maria";
let valorCompra = 650;
let clienteVip = false;

// Descontos
let desconto = 0;
let valorDesconto = 0;
let valorFinal = 0;

// Verificando o desconto
if (clienteVip == true) {
    desconto = 20;
} else if (valorCompra >= 500) {
    desconto = 15;
} else if (valorCompra >= 200) {
    desconto = 10;
} else {
    desconto = 0;
}

// cálculos
valorDesconto = valorCompra * desconto / 100;
valorFinal = valorCompra - valorDesconto;

// Mostrando os resultados
console.log("Nome: " + nomeCliente);
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Desconto: " + desconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));

// Desafio
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}