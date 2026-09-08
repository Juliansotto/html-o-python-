const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./parroquia.db');

// Crear tabla de trámites si no existe
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tramites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo TEXT,
            nombre TEXT,
            fecha TEXT
        )
    `);
});

app.use(express.json());

// Endpoint para obtener trámites
app.get('/api/tramites', (req, res) => {
    db.all('SELECT * FROM tramites', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint para agregar un trámite
app.post('/api/tramites', (req, res) => {
    const { tipo, nombre, fecha } = req.body;
    db.run(
        'INSERT INTO tramites (tipo, nombre, fecha) VALUES (?, ?, ?)',
        [tipo, nombre, fecha],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ id: this.lastID });
        }
    );
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});