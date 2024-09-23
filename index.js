const express  = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> {
    console.log('connection started to mongoose');
    
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number
})

const movie = mongoose.model('Movie', movieSchema);
const amadeus = new movie('Amadues',1203,4.2);

