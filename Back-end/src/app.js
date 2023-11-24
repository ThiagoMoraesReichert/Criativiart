// Importar o pacote express (servidor)
const express = require('express');
// Importar o cors para lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/useRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postRouter');
const perfilRouter = require('./routes/perfilRouter');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o uso dos cors no servidor
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', postRouter);
app.use('/api', perfilRouter);
app.use('/uploads', express.static(__dirname + '\\public'));
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3333);

module.exports = app;