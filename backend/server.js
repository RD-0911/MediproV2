const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de conexión
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "consultorio",
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error("Error al conectar con MySQL:", err);
    return;
  }
  console.log("Conectado a la base de datos");
});

// Ruta de prueba
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Servido corriendo en http://localhost:3000");
});
