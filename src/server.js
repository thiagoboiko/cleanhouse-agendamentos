require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');

const agendamentoRoutes = require('./routes/AgendamentoRoutes');
const avaliacaoRoutes = require('./routes/AvaliacaoRoutes');

const app = express();

// Conectar ao MongoDB
connectDatabase();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de health check
app.get('/', (req, res) => {
  res.json({
    service: 'CleanHouse - Microserviço de Agendamentos',
    status: 'online',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Rotas
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
});