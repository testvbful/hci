var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var animalSchema = mongoose.Schema({
        name: String,
        type: String, 
        gender: String, 
        age: String, 
        location:{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'locationData'
        },
        image: String, 
        description: String,
        breed: String,
        health: String,
        timeInAzil: String,
        ageRange: String
}, {collection: 'animals'});

var animalData = module.exports = mongoose.model('animalData', animalSchema);


