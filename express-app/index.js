const express = require('express');
const path = require('path'); // Modulo utile per gestire percorsi di file
const app = express();
const port = 3000;

// Configura Express per servire file statici dalla cartella "public"
app.use(express.static('public'));

// Definisci la route principale "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Rispondi con il file HTML
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
//