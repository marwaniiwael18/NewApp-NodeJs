const mongoose = require('mongoose');
const Ordinateur = require('./models/Ordinateur');

mongoose.connect('mongodb://localhost:27017/user-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected!');
        return Ordinateur.insertMany([
            { madele: 'Model A', categorie: 'Z', dateFabrication: new Date('2023-01-01'), prix: 1000 },
            { madele: 'Model B', categorie: 'Y', dateFabrication: new Date('2023-02-01'), prix: 1500 },
            { madele: 'Model C', categorie: 'Z', dateFabrication: new Date('2023-03-01'), prix: 2000 }
        ]);
    })
    .then(() => {
        console.log('Data inserted!');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log('Error: ' + error);
        mongoose.connection.close();
    });
