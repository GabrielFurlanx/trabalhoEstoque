function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (nome === "") {
      alert("O nome do produto deve ser preenchido");
      return false;
  }

  if (isNaN(preco) || preco <= 0) {
      alert("O preço do produto deve ser um número maior que zero");
      return false;
  }

  if (isNaN(quantidade) || quantidade <= 0) {
      alert("A quantidade do produto deve ser um número maior que zero");
      return false;
  }

  // Se todos os campos estiverem corretos, retorna true
  return true;
}
