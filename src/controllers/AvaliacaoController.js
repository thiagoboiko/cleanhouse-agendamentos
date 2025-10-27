const Avaliacao = require('../models/Avaliacao');

// GET - Listar avaliações
exports.listarAvaliacoes = async (req, res) => {
  try {
    const { profissionalId, agendamentoId } = req.query;
    
    const filtro = {};
    if (profissionalId) filtro.profissionalId = profissionalId;
    if (agendamentoId) filtro.agendamentoId = agendamentoId;

    const avaliacoes = await Avaliacao.find(filtro)
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: avaliacoes.length,
      data: avaliacoes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao listar avaliações',
      error: error.message
    });
  }
};

// POST - Criar avaliação
exports.criarAvaliacao = async (req, res) => {
  try {
    const avaliacao = await Avaliacao.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Avaliação criada com sucesso',
      data: avaliacao
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao criar avaliação',
      error: error.message
    });
  }
};

// GET - Buscar avaliação por ID
exports.buscarAvaliacao = async (req, res) => {
  try {
    const avaliacao = await Avaliacao.findById(req.params.id);
    
    if (!avaliacao) {
      return res.status(404).json({
        success: false,
        message: 'Avaliação não encontrada'
      });
    }

    res.json({
      success: true,
      data: avaliacao
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar avaliação',
      error: error.message
    });
  }
};