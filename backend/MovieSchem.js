const mongoose = require("mongoose");

// const MovieSchema = new mongoose.Schema({
//     movieTitle: { type: String, required: true },
//     moviedescription: { type: String, required: true },
//     moviemeta: { type: String, required: true },
//     imageUrl: { type: String, required: true },
// });

const MovieSchema = new mongoose.Schema({
    movieTitle: {
        type: String,
        required: true,
    },
    moviedescription: {
        type: String,
        required: true,
    },
    moviemeta: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true, 
    }
});


const MovieModel = mongoose.model("Allmovies", MovieSchema, "Allmovies");
module.exports = MovieModel;


