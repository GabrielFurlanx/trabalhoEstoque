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

// Exemplo de código no frontend (usando JavaScript)
const form = document.getElementById('seuFormulario'); // Pegue o formulário por ID ou outra maneira

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const formData = new FormData(form); // Obtém os dados do formulário
    const url = 'http://localhost:8080/cadastrarProdutos'; // URL da rota do backend para cadastrar produtos

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Exibe a resposta do backend (opcional)
            // Faça algo com a resposta se necessário
        } else {
            console.error('Erro ao cadastrar produto:', response.statusText);
            // Trate o erro de acordo com sua lógica
        }
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        // Trate o erro de acordo com sua lógica
    }
});
