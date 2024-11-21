const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/sequelize'); // Não precisa colocar a extensão .js, mas pode se quiser
const cadastroRoutes = require('./routes/routes-cadastros');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/cadastro', cadastroRoutes);

db.authenticate()
    .then(() => console.log('Conexão com banco de dados bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));

db.sync();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
