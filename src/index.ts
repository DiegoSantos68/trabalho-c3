import dotenv from 'dotenv';
dotenv.config(); // Carrega variáveis de ambiente do arquivo .env


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/auth', authRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
