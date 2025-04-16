require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});

app.use("/api/ping", require("./routes/pingRoutes"));
