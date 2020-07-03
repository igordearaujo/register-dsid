const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const AccommodationOrderSchema = new mongoose.Schema({
    accommodationId: {
        type: String,
        require: true,
    },
    pricePerNight: {
        type: Number,
        require: true,
    },
    priceTotal: {
        type: Number,
        require: true,
    },
    _userId: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})

const AccommodationOrder = mongoose.model('AccommodationOrder', AccommodationOrderSchema)

module.exports = AccommodationOrder