const Agendamento = require('../models/Agendamento');

// Define handlers as named functions so we can export a single object at the end
const listarAgendamentos = async (req, res) => {
  try {
    const { status, clienteId, profissionalId } = req.query;

    const filtro = {};
    if (status) filtro.status = status;
    if (clienteId) filtro.clienteId = clienteId;
    if (profissionalId) filtro.profissionalId = profissionalId;

    const agendamentos = await Agendamento.find(filtro).sort({ dataHora: -1 });

    res.json({
      success: true,
      count: agendamentos.length,
      data: agendamentos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao listar agendamentos',
      error: error.message,
    });
  }
};

const buscarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.findById(req.params.id);

    if (!agendamento) {
      return res.status(404).json({
        success: false,
        message: 'Agendamento não encontrado',
      });
    }

    res.json({
      success: true,
      data: agendamento,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar agendamento',
      error: error.message,
    });
  }
};

const criarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Agendamento criado com sucesso',
      data: agendamento,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao criar agendamento',
      error: error.message,
    });
  }
};

const atualizarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!agendamento) {
      return res.status(404).json({
        success: false,
        message: 'Agendamento não encontrado',
      });
    }

    res.json({
      success: true,
      message: 'Agendamento atualizado com sucesso',
      data: agendamento,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao atualizar agendamento',
      error: error.message,
    });
  }
};

const cancelarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelado' },
      { new: true }
    );

    if (!agendamento) {
      return res.status(404).json({
        success: false,
        message: 'Agendamento não encontrado',
      });
    }

    res.json({
      success: true,
      message: 'Agendamento cancelado com sucesso',
      data: agendamento,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao cancelar agendamento',
      error: error.message,
    });
  }
};

module.exports = {
  listarAgendamentos,
  buscarAgendamento,
  criarAgendamento,
  atualizarAgendamento,
  cancelarAgendamento,
};