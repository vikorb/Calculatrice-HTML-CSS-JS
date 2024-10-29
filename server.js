const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public"))); // Assurez-vous de mettre vos fichiers dans un dossier 'public'

// Route par défaut
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Assurez-vous que votre index.html est dans le dossier 'public'
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution à http://localhost:${port}`);
});
