function mostrarMensagem() {
  const frases = [
    "Você é meu presente favorito da vida. 💕",
    "Com você, todos os dias são especiais. 🌹",
    "Te amo mais do que palavras podem dizer. ❤️",
    "Seu sorriso é meu lugar favorito. 😍",
    "Juntos somos perfeitos. 💑"
  ];

  const index = Math.floor(Math.random() * frases.length);
  document.getElementById("mensagem").innerText = frases[index];
}
