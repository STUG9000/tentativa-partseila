const { DataTypes } = require('sequelize');
const db = require('../sequelize');

const Cadastro = db.define('Cadastro', {
    nome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, unique: true, allowNull: false },
    idade: { type: DataTypes.INTEGER, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
    endereco: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    senha: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Cadastro;
