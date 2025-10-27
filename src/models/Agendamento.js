const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  clienteId: {
    type: String,
    required: true,
    index: true
  },
  profissionalId: {
    type: String,
    required: true,
    index: true
  },
  dataHora: {
    type: Date,
    required: true
  },
  tipoServico: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pendente', 'confirmado', 'em_andamento', 'concluido', 'cancelado'],
    default: 'pendente'
  },
  endereco: {
    rua: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    cep: String
  },
  valor: {
    type: Number,
    required: true
  },
  observacoes: String,
  checkIn: Date,
  checkOut: Date
}, {
  timestamps: true
});

// Índices para otimizar buscas
agendamentoSchema.index({ dataHora: 1, status: 1 });
agendamentoSchema.index({ profissionalId: 1, dataHora: 1 });

module.exports = mongoose.model('Agendamento', agendamentoSchema);