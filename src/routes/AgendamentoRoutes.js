const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/AgendamentoController');

router.get('/', agendamentoController.listarAgendamentos);
router.get('/:id', agendamentoController.buscarAgendamento);
router.post('/', agendamentoController.criarAgendamento);
router.put('/:id', agendamentoController.atualizarAgendamento);
router.delete('/:id', agendamentoController.cancelarAgendamento);

module.exports = router;