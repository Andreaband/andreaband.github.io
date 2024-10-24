const express = require('express');
const app = express();

// Serve i file statici (CSS, immagini, ecc.)
app.use(express.static("public"));

app.set("view engine", "ejs");  // Usa EJS come motore di rendering

// Importa il router dei prodotti
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');

// Associa il router ai rispettivi percorsi
app.use("/users", userRouter);
app.use("/Produkt", productRouter);  // Rotta per i prodotti

// Avvia il server sulla porta 3000
app.listen(3000, () => {
    console.log('Server in ascolto su http://localhost:3000');
});
