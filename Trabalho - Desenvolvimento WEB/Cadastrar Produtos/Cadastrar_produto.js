// Validação dos campos do formulário

function validarFormulario() {
    // Verifica se o nome do produto está preenchido
    if (document.getElementById("nome").value == "") {
      alert("O nome do produto deve ser preenchido");
      return false;
    }
  
    // Verifica se a descrição do produto está preenchida
    if (document.getElementById("descricao").value == "") {
      alert("A descrição do produto deve ser preenchida");
      return false;
    }
  
    // Verifica se o preço do produto é um número
    if (!isNaN(document.getElementById("preco").value)) {
      alert("O preço do produto deve ser um número");
      return false;
    }
  
    // Verifica se o preço do produto é maior que zero
    if (document.getElementById("preco").value <= 0) {
      alert("O preço do produto deve ser maior que zero");
      return false;
    }
  
    // Verifica se a quantidade do produto é um número
    if (!isNaN(document.getElementById("quantidade").value)) {
      alert("A quantidade do produto deve ser um número");
      return false;
    }
  
    // Verifica se a quantidade do produto é maior que zero
    if (document.getElementById("quantidade").value <= 0) {
      alert("A quantidade do produto deve ser maior que zero");
      return false;
    }
  
    // Se todos os campos estiverem corretos, retorna true
    return true;
  }
  