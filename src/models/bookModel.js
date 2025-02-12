const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    stockedQuantity: {
        type: Number,
        required: true,
        min: 0
    },
    checkedOutQuantity: {
        type: Number,
        default: 0,
        min: 0
    }
});

module.exports = mongoose.model('Book', bookSchema);
