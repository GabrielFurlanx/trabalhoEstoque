const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Cadastrar Produtos')));

// COMEÇAR NA http://localhost:8080/Tela_Principal/Principal.html


const User = require('./models/User');
const Produtos = require('./models/Produtos');
const { error } = require('console');


// Servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));






// Rota para servir a página Principal.html
app.use(express.static(path.join(__dirname, 'Tela_Principal'))); // Adiciona a pasta Tela_Principal

//Tela de cadastro de usuario

app.use(express.static(path.join(__dirname, 'Cadastro')));

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'Cadastro', 'cadastro.html'));
  });




// Definindo a pasta estática para servir arquivos
app.use(express.static(path.join(__dirname, 'Tela_comissao')));

// Rota para lidar com a requisição do arquivo comissao.html
app.get('/comissao.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Tela_comissao', 'comissao.html'));
});






//Tela principal

// Rota para servir a página Principal.html
app.get('/Principal', (req, res) => {
  res.sendFile(path.join(__dirname, 'Tela_Principal', 'Principal.html'));
});

app.use('/Tela_Principal', express.static(path.join(__dirname, 'Tela_Principal')))

//

app.use('/Compra-Venda-Produtos', express.static(path.join(__dirname, 'Compra-Venda-Produtos')));

///Tela Incial
app.use('/telaInicial', express.static(path.join(__dirname, 'telaInicial')));


// Rota para enviar o arquivo HTML quando acessado
app.get('/tela', (req, res) => {
  res.sendFile(path.join(__dirname, 'telaInicial', 'Tela.html'));
});
///

/// Tela Login
app.use('/telaLogin', express.static(path.join(__dirname, 'telaLogin')));

// Rota para enviar o arquivo HTML do login quando acessado
// Configura o Express para servir arquivos estáticos na pasta 'telaLogin' para a rota '/telaLogin'
app.use('/telaLogin', express.static(path.join(__dirname, 'telaLogin')));

// Configura o Express para servir arquivos estáticos na pasta 'telaInicial' para a rota '/telaInicial'
app.use('/telaInicial', express.static(path.join(__dirname, 'telaInicial')));

// Configura o Express para servir arquivos estáticos na pasta 'Recomeco' para a rota raiz '/'
app.use('/', express.static(path.join(__dirname, 'Recomeco')));

// Rota para enviar o arquivo HTML do login quando acessado
app.get('/telaLogin/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'telaLogin', 'login.html'));
});
///


app.get('/', async (req, res) => {
  res.send('Pagina inicial mudando automaticamente');
});

////

app.get('/cadastrarProdutos', async (req, res) => {
  // Corrigindo o caminho para o arquivo Cadastrar_Produto.html
  const filePath = path.join(__dirname, 'Cadastrar Produtos', 'Cadastrar_Produto.html');
  res.sendFile(filePath);
});

  app.get('/Cadastrar%20Produtos/Cadastrar_Produto.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'Cadastrar Produtos', 'Cadastrar_Produto.html'));
  });

////

app.get('/Compra-Venda-Produtos', async (req, res) => {
    const filePath = path.join(__dirname, 'Compra-Venda-Produtos', 'Compra-Venda.html');
    res.sendFile(filePath);
  });

////


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/cadastro', async (req, res) => {
  try {
    const { nome, sobrenome, email, senha } = req.body;

    // Verificar se o e-mail já está cadastrado no banco de dados
    const existingUser = await User.findOne({ where: { email } });
    
    if (existingUser) {
      return res.status(400).json({ error: 'Este e-mail já está em uso' });
    }

    // Se o e-mail não estiver cadastrado, criar um novo usuário no banco de dados
    const newUser = await User.create({
      nome,
      sobrenome,
      email,
      senha
    });
    
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// login

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar o usuário no banco de dados usando o modelo User
    const user = await User.findOne({ where: { email, senha: password } });

    if (user) {
      // Usuário encontrado, proceder com o login
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      // Usuário não encontrado ou senha incorreta
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});


///////////


app.post('/cadastrarProdutos', async (req, res) => {
    const { nome, preco, quantidade } = req.body;
  
    try {
      const novoProduto = await Produtos.create({
        nome,
        preco,
        quantidade
      });
  
      return res.json({
        error: false,
        mensagem: "Produto cadastrado com sucesso",
        produto: novoProduto // Opcional: Retorna o produto cadastrado para fins de confirmação
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        mensagem: "Erro ao cadastrar produto",
        erro: error.message // Opcional: Retorna o erro para ajudar na depuração
      });
    }
  });
  

  app.post('/Compra-Venda-Produtos/Compra-Venda.html', async (req, res) => {
    const { campo1, campo2, campo3 } = req.body; // Obtenha os dados do corpo da requisição
  
    // Lógica de validação (exemplo: verificar se campos obrigatórios estão preenchidos)
    if (!campo1 || !campo2 || !campo3) {
      return res.status(400).json({ error: 'Todos os campos devem ser preenchidos.' });
    }
  
    try {
      // Lógica para persistir os dados no banco de dados (exemplo com Sequelize)
      const novoRegistro = await Modelo.create({ campo1, campo2, campo3 });
      
      // Envie uma resposta de sucesso ao cliente
      return res.status(201).json({ message: 'Dados cadastrados com sucesso!', novoRegistro });
    } catch (error) {
      // Em caso de erro, envie uma resposta de erro ao cliente
      return res.status(500).json({ error: 'Ocorreu um erro ao processar a requisição.' });
    }
  });
  

////////

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080: http://localhost:8080');
});
