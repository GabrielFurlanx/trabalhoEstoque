// exibir_produtos.js

window.onload = function() {
  const produtosArmazenados = localStorage.getItem('produtos');

  if (produtosArmazenados) {
      const produtos = JSON.parse(produtosArmazenados);
      const tabela = document.getElementById('tabelaProdutos');

      produtos.forEach((produto, index) => {
          const newRow = tabela.insertRow(-1);
          const cell1 = newRow.insertCell(0);
          const cell2 = newRow.insertCell(1);
          const cell3 = newRow.insertCell(2);
          const cell4 = newRow.insertCell(3);
          const cell5 = newRow.insertCell(4);

          cell1.innerHTML = produto.nome;
          cell2.innerHTML = produto.preco.toFixed(2);
          cell3.innerHTML = produto.quantidade;

          // Adicionando botão de editar
          const editarBtn = document.createElement('button');
          editarBtn.innerHTML = 'Editar';
          editarBtn.addEventListener('click', function() {
              // Preencher um formulário/modal com os detalhes do produto
              // Neste exemplo, apenas exibimos um alerta com os detalhes para demonstração
              const novoNome = prompt('Novo nome:', produto.nome);
              const novoPreco = prompt('Novo preço:', produto.preco);
              const novaQuantidade = prompt('Nova quantidade:', produto.quantidade);

              // Verificar se o usuário clicou em "cancelar" no prompt
              if (novoNome !== null && novoPreco !== null && novaQuantidade !== null) {
                  // Atualizar os dados do produto
                  produtos[index].nome = novoNome;
                  produtos[index].preco = parseFloat(novoPreco);
                  produtos[index].quantidade = parseInt(novaQuantidade);

                  // Atualizar o localStorage com os novos dados
                  localStorage.setItem('produtos', JSON.stringify(produtos));

                  // Atualizar a visualização na tabela
                  cell1.innerHTML = novoNome;
                  cell2.innerHTML = parseFloat(novoPreco).toFixed(2);
                  cell3.innerHTML = parseInt(novaQuantidade);
              }
          });
          cell4.appendChild(editarBtn);

          // Adicionando botão de excluir (mantido igual)
          const excluirBtn = document.createElement('button');
          excluirBtn.innerHTML = 'Excluir';
          excluirBtn.addEventListener('click', function() {
              produtos.splice(index, 1);
              localStorage.setItem('produtos', JSON.stringify(produtos));
              tabela.deleteRow(index + 1);
          });
          cell5.appendChild(excluirBtn);
      });
  }
}
