// Variável global para controlar o contador (Parte 5)
let valorContador = 10;

// Parte 3: Função para mostrar a mensagem personalizada
function mostrarCidade() {
  // Pega o valor digitado no campo de input
  let cidadeDigitada = document.getElementById("cidade").value;
  
  // Pega o elemento do parágrafo onde a mensagem vai aparecer
  let paragrafoMensagem = document.getElementById("mensagem");

  // Verifica se o usuário digitou algo
  if (cidadeDigitada === "") {
    paragrafoMensagem.textContent = "Por favor, digite o nome de uma cidade!";
  } else {
    // Exibe a mensagem personalizada na página
    paragrafoMensagem.textContent = "Malas prontas! Seu próximo destino é " + cidadeDigitada + "! ✈️";
  }
}


function destacarMensagem() {
  let paragrafoMensagem = document.getElementById("mensagem");

  paragrafoMensagem.style.color = "darkgreen";
  paragrafoMensagem.style.backgroundColor = "#e0ffe0";
  paragrafoMensagem.style.fontSize = "22px";
  paragrafoMensagem.style.padding = "10px";
  paragrafoMensagem.style.fontWeight = "bold";
}

// Parte 5: Funções do Contador
function aumentar() {
  // Soma +1 no valor da variável
  valorContador = valorContador + 1;
  
  // Atualiza o valor na tela
  document.getElementById("contador").textContent = valorContador;
}

function diminuir() {
  // Subtrai -1 no valor da variável
  valorContador = valorContador - 1;
  
  // Atualiza o valor na tela
  document.getElementById("contador").textContent = valorContador;
}