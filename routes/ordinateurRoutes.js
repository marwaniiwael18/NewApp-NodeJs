const express = require('express');
const router = express.Router();
const ordinateurController = require('../controllers/ordinateurController');

router.get('/ordinateurs/search', ordinateurController.searchOrdinateursByPrice);
router.post('/ordinateurs', ordinateurController.createOrdinateur);
router.get('/ordinateurs/:id', ordinateurController.getOrdinateur);
router.put('/ordinateurs/:id', ordinateurController.updateOrdinateur);
router.delete('/ordinateurs/:id', ordinateurController.deleteOrdinateur);

module.exports = router;
