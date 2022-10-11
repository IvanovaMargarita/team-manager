const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String },
    position: { type: String },
    gameOneStatus:{
        type:String,
        enum:["playing", "not playing", "undecided"],
        default: "undecided"

    },
    gameTwoStatus:{
        type:String,
        enum:["playing", "not playing", "undecided"],
        default: "undecided"
    },
    gameThreeStatus:{
        type:String,
        enum:["playing", "not playing", "undecided"],
        default: "undecided"

    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);

