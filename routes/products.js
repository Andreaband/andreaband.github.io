const express = require("express");
const router = express.Router();  // Usa express.Router() per il routing

// Rotta dinamica per i prodotti basata sullo slug
router.get("/:productSlug", (req, res) => {
    const productSlug = req.params.productSlug;

    // Simula un database di prodotti
    const products = {
        "FreakySet1": {
            name: "FreakySet 1",
            price: "€179,99",
            description: "Descrizione del prodotto FreakySet 1",
            image: "f6581aca-5f5a-496e-9778-37ef3101ede9.jpg"
        },
        "FreakySet2": {
            name: "FreakySet 2",
            price: "€179,99",
            description: "Descrizione del prodotto FreakySet 2",
            image: "a19e3388-23b0-412e-aed5-4a70f328e107.jpg"
        }
        // Puoi aggiungere altri prodotti qui...
    };

    // Controlla se il prodotto esiste
    const product = products[productSlug];
    if (product) {
        // Se il prodotto esiste, renderizza la pagina con il template ejs
        res.render("product", { product });
    } else {
        // Se non esiste, mostra una pagina 404
        res.status(404).send("Prodotto non trovato");
    }
});

module.exports = router;
