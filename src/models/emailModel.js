const { sql, getPool } = require("../config/db");

async function listarEmails() {
  const result = await getPool()
    .request()
    .query("SELECT * FROM email ORDER BY data_envio DESC");
  return result.recordset;
}

async function criarEmail({ id_aluno, endereco_email, mensagem }) {
  const result = await getPool()
    .request()
    .input("id_aluno", sql.Int, id_aluno)
    .input("endereco_email", sql.VarChar, endereco_email)
    .input("mensagem", sql.VarChar, mensagem)
    .query(
      `INSERT INTO email (id_aluno, endereco_email, mensagem)
       OUTPUT INSERTED.*
       VALUES (@id_aluno, @endereco_email, @mensagem)`
    );

  return result.recordset[0];
}

async function atualizarEmail(id, { id_aluno, endereco_email, mensagem }) {
  const result = await getPool()
    .request()
    .input("id", sql.Int, id)
    .input("id_aluno", sql.Int, id_aluno)
    .input("endereco_email", sql.VarChar, endereco_email)
    .input("mensagem", sql.VarChar, mensagem)
    .query(
      `UPDATE email
       SET id_aluno = @id_aluno,
           endereco_email = @endereco_email,
           mensagem = @mensagem
       OUTPUT INSERTED.*
       WHERE id_email = @id`
    );

  return result.recordset[0];
}

async function removerEmail(id) {
  const result = await getPool()
    .request()
    .input("id", sql.Int, id)
    .query("DELETE FROM email WHERE id_email = @id");

  return result.rowsAffected[0] > 0;
}

module.exports = {
  listarEmails,
  criarEmail,
  atualizarEmail,
  removerEmail,
};
