const express = require('express');
const app = express();

// Configura la cartella per i file statici
app.use(express.static("public"));

// Imposta EJS come motore di visualizzazione
app.set("view engine", "ejs");

// Importa i router per utenti e prodotti
const userRouter = require("./routes/users");
const productRouter = require("./routes/products"); // Aggiungi il router dei prodotti

// Associa i percorsi ai rispettivi router
app.use("/users", userRouter);
app.use("/Produkt", productRouter);  // Route per i dettagli del prodotto

// Avvia il server sulla porta 3000
app.listen(3000, () => {
    console.log('Server in ascolto su http://localhost:3000');
});
