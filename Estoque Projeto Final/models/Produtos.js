const Sequelize = require('sequelize');
const db = require('./db');

const Produtos = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Produtos.sync();

module.exports = Produtos;