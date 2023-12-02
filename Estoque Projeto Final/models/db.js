const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("estoques", "root", "Savagaju123", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log('Conectado com sucesso');
}).catch(function(){
    console.log('Falha ao se conectar');
    });


module.exports = sequelize;