const express = require("express");
const path = require("path");
const { connectDB, getPool } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Pool será obtido via módulo de DB
let pool;

// =====================================================
// ROTAS DA API
// =====================================================
app.use("/api/departamentos", require("./routes/departamentos"));
app.use("/api/cursos", require("./routes/cursos"));
app.use("/api/turmas", require("./routes/turmas"));
app.use("/api/alunos", require("./routes/alunos"));
app.use("/api/matriculas", require("./routes/matriculas"));
app.use("/api/pagamentos", require("./routes/pagamentos"));
app.use("/api/emails", require("./routes/emails"));

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rotas movidas para módulos em ./routes

// Rota para servir a aplicação
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Inicialização do servidor
async function startServer() {
  await connectDB();
  pool = getPool();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📱 Acesse: http://localhost:${PORT}`);
    console.log(`🔗 API disponível em: http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
