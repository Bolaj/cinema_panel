const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orphanageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orphanage',
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);
