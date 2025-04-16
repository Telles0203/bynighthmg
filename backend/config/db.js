const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado ao MongoDB");
  } catch (err) {
    console.error("❌ Erro ao conectar:", err.message);
    process.exit(1);
  }
}

async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log("🔌 Desconectado do MongoDB");
  } catch (err) {
    console.error("❌ Erro ao desconectar:", err.message);
  }
}

module.exports = {
  connectDB,
  disconnectDB
};
