const mongoose = require('mongoose');

const avaliacaoSchema = new mongoose.Schema({
  agendamentoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agendamento',
    required: true
  },
  clienteId: {
    type: String,
    required: true
  },
  profissionalId: {
    type: String,
    required: true,
    index: true
  },
  nota: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comentario: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Avaliacao', avaliacaoSchema);