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
    monthOfBirth: {
        type: Number,
        min: 1,
        max: 12,
        require: false,
    },
    yearOfBirth: {
        type: Number,
        min: 1900,
        max: 2002,
        require: false,
    },
    dayOfBirth: {
        type: Number,
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
    password: {
        type: String,
        require: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User