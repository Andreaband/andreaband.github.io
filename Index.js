const express = require('express'); // Importa Express
const app = express(); // Crea l'app Express
const port = 3000; // Imposta la porta su cui il server ascolterà

// Definisci una route che risponde alla root ("/")
app.get('/', (req, res) => {
  res.send('Ciao, questo è un messaggio a schermo con Express!'); // Risposta che verrà mostrata nel browser
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`); // Messaggio su console quando il server parte
});
