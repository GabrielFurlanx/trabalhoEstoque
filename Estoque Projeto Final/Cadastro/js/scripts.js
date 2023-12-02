const form = document.getElementById('register-form'); // Obter o formulário por ID ou outra maneira

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmacaoSenha = document.getElementById("confirmacaoSenha").value.trim();

    const url = 'http://localhost:8080/cadastro'; // URL da rota do backend para cadastro

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, sobrenome, email, senha, confirmacaoSenha })
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Exibe a resposta do backend
            // Faça algo com a resposta se necessário
        } else {
            console.error('Erro ao cadastrar usuário:', response.statusText);
            // Trate o erro de acordo com sua lógica
        }
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        // Trate o erro de acordo com sua lógica
    }
});