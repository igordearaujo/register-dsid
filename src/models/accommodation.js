const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const AccommodationOrderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        require: true
    },
    pricePerNight: {
        type: Number,
        require: true
    },
    priceTotal: {
        type: Number,
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})

const AccommodationOrder = mongoose.model('AccommodationOrder', AccommodationOrderSchema)

module.exports = AccommodationOrder