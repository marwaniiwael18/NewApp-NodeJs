const Ordinateur = require('../models/Ordinateur');
const mongoose = require('mongoose');

exports.createOrdinateur = async (req, res) => {
    const data = req.body;
    try {
        const newOrdinateur = new Ordinateur(data);
        await newOrdinateur.save();
        res.send('Ordinateur created');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getOrdinateur = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid ID');
    }

    try {
        const ordinateur = await Ordinateur.findById(id);
        if (!ordinateur) {
            return res.status(404).send('Ordinateur not found');
        }
        res.json(ordinateur);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateOrdinateur = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await Ordinateur.findByIdAndUpdate(id, data);
        res.send('Ordinateur updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteOrdinateur = async (req, res) => {
    const id = req.params.id;
    try {
        await Ordinateur.findByIdAndDelete(id);
        res.send('Ordinateur deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.searchOrdinateursByPrice = async (req, res) => {
    const { minPrice, maxPrice } = req.query;
    try {
        const ordinateurs = await Ordinateur.find({
            prix: { $gte: minPrice, $lte: maxPrice }
        });
        res.json(ordinateurs);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.filterOrdinateursByCategory = async (category) => {
    try {
        return await Ordinateur.find({ categorie: category });
    } catch (error) {
        throw new Error(error.message);
    }
};
