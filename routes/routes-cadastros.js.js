const express = require('express');
const bcrypt = require('bcryptjs');
const Cadastro = require('../models/Cadastro');

const router = express.Router();

// Rota para criar novo cadastro
router.post('/', async (req, res) => {
    const { nome, cpf, idade, telefone, endereco, email, senha } = req.body;

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const novoCadastro = await Cadastro.create({
            nome,
            cpf,
            idade,
            telefone,
            endereco,
            email,
            senha: senhaCriptografada,
        });

        res.status(201).json({ mensagem: 'Cadastro criado com sucesso!', cadastro: novoCadastro });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

// Rota para listar todos os cadastros
router.get('/', async (req, res) => {
    try {
        const cadastros = await Cadastro.findAll();
        res.json(cadastros);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// Rota para pesquisar um cadastro por CPF
router.get('/:cpf', async (req, res) => {
    const { cpf } = req.params;

    try {
        const cadastro = await Cadastro.findOne({ where: { cpf } });
        if (!cadastro) return res.status(404).json({ mensagem: 'Cadastro não encontrado!' });
        res.json(cadastro);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// Rota para apagar um cadastro por CPF
router.delete('/:cpf', async (req, res) => {
    const { cpf } = req.params;

    try {
        const resultado = await Cadastro.destroy({ where: { cpf } });
        if (!resultado) return res.status(404).json({ mensagem: 'Cadastro não encontrado!' });
        res.json({ mensagem: 'Cadastro deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;
