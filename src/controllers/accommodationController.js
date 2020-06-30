const express = require('express')
const authMiddleware = require('../middlewares/auth')

const AccommodationOrder = require('../models/accommodation')

const router = express.Router()

router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId })
})

router.get('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})

router.post('/', async (req, res) => {
    res.send({ user: req.userId })
})

router.put('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})

router.delete('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})


module.exports = app => app.use('/orders', router)