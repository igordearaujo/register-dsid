const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const AccommodationOrderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        require: true,
        unique: true,
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

AccommodationOrderSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.id, 10)
    this.id = hash
})

const AccommodationOrder = mongoose.model('AccommodationOrder', AccommodationOrderSchema)

module.exports = AccommodationOrder