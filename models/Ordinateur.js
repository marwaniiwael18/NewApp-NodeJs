const mongoose = require('mongoose');

const ordinateurSchema = new mongoose.Schema({
    madele: { type: String, required: true },
    categorie: { type: String, required: true },
    dateFabrication: { type: Date, required: true },
    prix: { type: Number, required: true }
});

const Ordinateur = mongoose.model('Ordinateur', ordinateurSchema);

module.exports = Ordinateur;
