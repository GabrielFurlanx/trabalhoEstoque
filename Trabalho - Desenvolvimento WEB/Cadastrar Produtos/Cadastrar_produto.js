function cadastrarProduto() {
    // Capturando os valores do formulário
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Criando um objeto com os dados do produto
    const novoProduto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    // Verificando se já existem produtos armazenados
    let produtos = [];
    const produtosArmazenados = localStorage.getItem('produtos');

    if (produtosArmazenados) {
        produtos = JSON.parse(produtosArmazenados);
    }

    // Adicionando o novo produto ao array
    produtos.push(novoProduto);

    // Armazenando a lista atualizada no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Limpar os campos do formulário após o cadastro
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('quantidade').value = '';

    return false; // Retorna false para evitar o envio do formulário
}

function cancelarCadastro() {
    window.location.href = '../Compra-Venda-Produtos/Compra-Venda.html';
}
