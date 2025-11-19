const emailModel = require("../models/emailModel");

async function listar(req, res) {
  try {
    const emails = await emailModel.listarEmails();
    res.json(emails);
  } catch (error) {
    console.error("Erro ao listar emails:", error);
    res.status(500).json({ error: "Erro ao listar emails" });
  }
}

async function criar(req, res) {
  try {
    const { id_aluno, endereco_email, mensagem } = req.body;

    if (!id_aluno || !endereco_email) {
      return res.status(400).json({ error: "id_aluno e endereco_email são obrigatórios." });
    }

    const novoEmail = await emailModel.criarEmail({
      id_aluno,
      endereco_email,
      mensagem,
    });

    res.status(201).json(novoEmail);
  } catch (error) {
    console.error("Erro ao criar email:", error);
    res.status(500).json({ error: "Erro ao salvar email" });
  }
}


async function atualizar(req, res) {
  try {
    const id = req.params.id;
    const dados = req.body;
    const atualizado = await emailModel.atualizarEmail(id, dados);
    res.json(atualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar email" });
  }
}

async function remover(req, res) {
  try {
    const id = req.params.id;
    const removido = await emailModel.removerEmail(id);
    res.json({ sucesso: removido });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover email" });
  }
}

module.exports = {
  listar,
  criar,
  atualizar,
  remover,
};
