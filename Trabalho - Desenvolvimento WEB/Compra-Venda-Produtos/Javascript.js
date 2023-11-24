// Obter os elementos do DOM
const valorResultado = document.getElementById("valorResultado");
const adicionarBotoes = document.querySelectorAll(".adicionar");
const excluirBotoes = document.querySelectorAll(".excluir");

// Função para adicionar um produto
function adicionarProduto(produtoId) {
  // Obter o valor do produto
  const valor = getValorProduto(produtoId);

  // Obter a quantidade do produto
  const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
  let quantidade = parseInt(quantidadeElement.textContent);

  // Verifica se há produtos disponíveis para adicionar
  if (quantidade > 0) {
    quantidade--; // Diminui a quantidade na tabela
    quantidadeElement.textContent = quantidade;
    atualizarResultado(valor);

    // Altera a quantidade na linha selecionada
    const quantidadeLinhaElement = document.getElementById(`quantidade-linha-${produtoId}`);
    quantidadeLinhaElement.textContent = quantidade;

    // Verifica se a quantidade é menor que zero
    if (quantidade < 0) {
      quantidade = 0; // Define a quantidade como zero
      quantidadeElement.textContent = quantidade;
      quantidadeLinhaElement.textContent = quantidade;
    }
  }
}

// Função para excluir um produto
function excluirProduto(produtoId) {
  const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
  let quantidade = parseInt(quantidadeElement.textContent);

  if (quantidade < 55) { // Aqui você deve ajustar a lógica de acordo com suas necessidades para cada produto
    quantidade++; // Aumenta a quantidade na tabela
    quantidadeElement.textContent = quantidade;
    atualizarResultado(-getValorProduto(produtoId)); // Subtrai o valor do produto removido
  }
  // Aqui você pode adicionar condições para outros produtos se necessário

}

// ... (código anterior)

// Função para excluir um produto
function excluirProduto(produtoId) {
  const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
  let quantidade = parseInt(quantidadeElement.textContent);

  if (quantidade < 55) { // Aqui você deve ajustar a lógica de acordo com suas necessidades para cada produto
    quantidade++; // Aumenta a quantidade na tabela
    quantidadeElement.textContent = quantidade;
    atualizarResultado(-getValorProduto(produtoId)); // Subtrai o valor do produto removido
  }
  // Aqui você pode adicionar condições para outros produtos se necessário
}

// Função para devolver um produto
function devolverProduto(produtoId) {
  const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
  let quantidade = parseInt(quantidadeElement.textContent);

  if (quantidade < 55) { // Aqui você deve ajustar a lógica de acordo com suas necessidades para cada produto
    quantidade++; // Aumenta a quantidade na tabela
    quantidadeElement.textContent = quantidade;
    atualizarResultado(-getValorProduto(produtoId)); // Subtrai o valor do produto devolvido
  }
  // Aqui você pode adicionar condições para outros produtos se necessário
}

// ... (restante do código)

// Adicionar event listeners aos botões "Excluir"
excluirBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produtoId = botao.getAttribute("data-produto-id");
    excluirProduto(produtoId);
  });
});

// Adicionar event listeners aos botões "Devolver"
excluirBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produtoId = botao.getAttribute("data-produto-id");
    devolverProduto(produtoId);
  });
});

// ... (restante do código)


// Função para obter o valor do produto
function getValorProduto(produtoId) {
  switch (produtoId) {
    case "1":
      return 160;
    case "2":
      return 220;
    case "3":
      return 50;
    case "4":
      return 70;
    case "5":
      return 100;
    case "6":
      return 120;
    case "7":
      return 150;
    case "8":
      return 170;
    case "9":
      return 300;
    case "10":
      return 230;
    default:
      return 0;
  }
}

// Função para atualizar o resultado
function atualizarResultado(valor) {
  // Obter o valor atual do resultado
  const valorAtual = parseFloat(valorResultado.textContent);

  // Atualizar o valor do resultado
  const valorTotal = valorAtual + valor;

  // Atualizar o valor do resultado
  valorResultado.textContent = valorTotal.toFixed(2);
}

// Adicionar event listeners aos botões "Adicionar"
adicionarBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produtoId = botao.getAttribute("data-produto-id");
    adicionarProduto(produtoId);
  });
});

// Adicionar event listeners aos botões "Excluir"
excluirBotoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produtoId = botao.getAttribute("data-produto-id");
    excluirProduto(produtoId);
  });
});




// Função para Devolver um produto
function excluirProduto(produtoId) {
    if (produtoId == 1) {
    const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
    let quantidade = parseInt(quantidadeElement.textContent);
    

    if (quantidade < 55) {
        quantidade++; // Aumenta a quantidade na tabela
        quantidadeElement.textContent = quantidade;
        
        // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
        let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
        const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
        let valorTotal = totalAtual + preco;
        if (valorTotal > 55) {
            quantidade = 0;
        }

        // Atualiza o resultado
        atualizarResultado();
        }
    } else if (produtoId == 2) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 62) {
            quantidade++; // Aumenta a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 62) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
        } else if (produtoId == 3) {
            const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
            let quantidade = parseInt(quantidadeElement.textContent);
            
            if (quantidade < 30) {
                quantidade++; // Aumenta a quantidade na tabela
                quantidadeElement.textContent = quantidade;
        
                // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
                let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
                const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
                let valorTotal = totalAtual + preco;
                if (valorTotal > 30) {
                    quantidade = 0;
                }
        
                // Atualiza o resultado
                atualizarResultado();
                } 
    }  else if (produtoId == 4) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 10) {
            quantidade++; // Aumenta a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 10) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 5) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 23) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 23) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 6) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 20) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 20) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 7) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 12) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 12) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 8) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 16) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 16) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 9) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 34) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 34) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();
            }
    } if (produtoId == 10) {
        const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
        let quantidade = parseInt(quantidadeElement.textContent);
        
        if (quantidade < 8) {
            quantidade++; // Aumentar a quantidade na tabela
            quantidadeElement.textContent = quantidade;
    
            // Verifica se o valor total atual mais o valor do item ultrapassa o valor limite
            let totalAtual = parseInt(document.getElementById("valorResultado").textContent);
            const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
            let valorTotal = totalAtual + preco;
            if (valorTotal > 8) {
                quantidade = 0;
            }
    
            // Atualiza o resultado
            atualizarResultado();

            }
    }
    
}
