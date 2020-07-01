const express = require('express')
const authMiddleware = require('../middlewares/auth')

const AccommodationOrder = require('../models/accommodation')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const accommodationOrders = await AccommodationOrder.find()

        return res.send({ accommodationOrders })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao criar novo pedido' })
    }

})

router.get('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})

router.post('/', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.create(req.body)

        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao criar novo pedido' })
    }

})

router.put('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})

router.delete('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})


module.exports = app => app.use('/orders', router)