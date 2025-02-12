const mongoose = require ("mongoose")

const orphanageSchema = mongoose.Schema({
    orphanage: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    dateVisited: {
        type: Date,
        default: Date.now
    },
    totalAmountSpent: {
        type: Number,
        default: 0
    },
    itemsDonated: [{
        itemName: String,
        quantity: Number
    }]


})

module.exports = mongoose.model('Orphanage', orphanageSchema);
