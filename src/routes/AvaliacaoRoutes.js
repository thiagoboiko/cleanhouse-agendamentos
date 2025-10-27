const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/AvaliacaoController');

router.get('/', avaliacaoController.listarAvaliacoes);
router.get('/:id', avaliacaoController.buscarAvaliacao);
router.post('/', avaliacaoController.criarAvaliacao);

module.exports = router;