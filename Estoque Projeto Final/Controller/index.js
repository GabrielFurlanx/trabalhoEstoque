const express = require('express');
const path = require('path');

const spawnSync = require('child_process');

const router = express.Router();

const User = require('../models/User');
const Produtos = require('../models/Produtos');


router.get('/cadastrarProdutos', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'Cadastrar_produto.html'));
});
