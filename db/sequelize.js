const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const db = new Sequelize('sistema_cadastro', 'root', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql',
});

db.sync()
    .then(() => console.log('Banco de dados conectado e sincronizado!'))
    .catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = db;
