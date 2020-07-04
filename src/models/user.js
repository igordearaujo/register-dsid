const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    surname: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: false,
    },
    birthDate: {
        type: Date,
        require: false,
    },
    phoneNumber: {
        type: Number,
        require: false,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})

// UserSchema.pre('save', async function(next){
//     const hash = await bcrypt.hash(this.password, 10)
//     this.password = hash

//     next()
// })

const User = mongoose.model('User', UserSchema)

module.exports = User