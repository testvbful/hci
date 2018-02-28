var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var locationSchema = mongoose.Schema({
        city: String,
        name: String,
        location : String,
        latitude: Number,
        longitude: Number,
        description: String,
        ratings: String,
        imageUrl: String
}, {collection: 'locations'});

var locationData = module.exports = mongoose.model('locationData', locationSchema);