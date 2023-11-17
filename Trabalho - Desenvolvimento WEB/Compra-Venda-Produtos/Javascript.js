// Obter os elementos do DOM
const valorResultado = document.getElementById("valorResultado");
const adicionarBotoes = document.querySelectorAll(".adicionar");
const excluirBotoes = document.querySelectorAll(".excluir");

// Função para adicionar um produto
function adicionarProduto(produtoId, linhaId) {
    const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
    let quantidade = parseInt(quantidadeElement.textContent);

    // Verifica se há produtos disponíveis para adicionar
    if (quantidade > 0) {
        quantidade--; // Diminui a quantidade na tabela
        quantidadeElement.textContent = quantidade;
        atualizarResultado();

        // Altera a quantidade na linha selecionada
        const quantidadeLinhaElement = document.getElementById(`quantidade-linha-${linhaId}`);
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
    if (produtoId == 1) {
    const quantidadeElement = document.getElementById(`quantidade-${produtoId}`);
    let quantidade = parseInt(quantidadeElement.textContent);

    if (quantidade < 55) {
        quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
                quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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
            quantidade++; // Diminui a quantidade na tabela
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



// Função para atualizar o resultado total
function atualizarResultado() {
    let total = 0;
    adicionarBotoes.forEach((botao) => {
        const produtoId = botao.getAttribute("data-produto-id");
        const quantidade = parseInt(document.getElementById(`quantidade-${produtoId}`).textContent);
        const preco = parseInt(document.getElementById(`celula-preco-${produtoId}`).textContent);
        total += quantidade * preco;
    });
    valorResultado.textContent = total;
}

// Adicionar event listeners aos botões "Adicionar" e "Excluir"
adicionarBotoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const produtoId = botao.getAttribute("data-produto-id");
        adicionarProduto(produtoId);
    });
});

excluirBotoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const produtoId = botao.getAttribute("data-produto-id");
        excluirProduto(produtoId);
    });
});

// Chamar a função inicial para calcular o resultado
atualizarResultado();