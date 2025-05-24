const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3002;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'ma_super_cle_secrete';
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use((req, res, next) => {
  const maxHeaderSize = 16000;
  const totalHeaderSize = JSON.stringify(req.headers).length;
  if (totalHeaderSize > maxHeaderSize) {
    return res.status(431).send('Request Header Fields Too Large');
  }
  next();
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Auth_app',
});

// ✅ Route POST pour l'inscription
app.post('/InscriptionIset', async (req, res) => {
  console.log("📥 Données reçues pour inscription :", req.body);

  const { nom, prenom, email, username, password, role } = req.body;

  if (!nom || !prenom || !email || !username || !password || !role) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  const fullName = `${nom} ${prenom}`;
  const checkQuery = 'SELECT * FROM users WHERE username = ?';

  db.query(checkQuery, [username], async (err, results) => {
    if (err) {
      console.error("Erreur de vérification :", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }

    if (results.length > 0) {
      return res.status(409).json({ error: "Nom d’utilisateur déjà utilisé." });
    }

    // 🔐 Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery = 'INSERT INTO users (username, password, full_name, email, role) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [username, hashedPassword, fullName, email, role], (err, result) => {
      if (err) {
        console.error("Erreur lors de l’insertion :", err);
        return res.status(500).json({ error: "Erreur lors de l’enregistrement." });
      }

      console.log("✅ Utilisateur enregistré avec succès :", result);
      return res.status(200).json({ message: "Inscription réussie !" });
    });
  });
});

// 🔐 Route POST de connexion
app.post('/loginComp', (req, res) => {
  const { username, password } = req.body;
  console.log("📥 Données reçues :", req.body);

  if (!username || !password) {
    return res.status(400).json({ error: 'Nom d’utilisateur et mot de passe requis' });
  }

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Erreur du serveur' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Utilisateur non trouvé' });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    res.json({
      message: 'Connexion réussie',
      token,
      role: user.role,
      username: user.username
    });
  });
});

// Route GET : liste des étudiants
app.get('/students', (req, res) => {
  db.query('SELECT * FROM users WHERE role = "student"', (err, results) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération des étudiants' });
    res.json(results);
  });
});

// Route GET : liste des enseignants
app.get('/teachers', (req, res) => {
  db.query('SELECT * FROM users WHERE role = "teacher"', (err, results) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération des enseignants' });
    res.json(results);
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
