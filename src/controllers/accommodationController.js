const express = require('express')
const authMiddleware = require('../middlewares/auth')

const AccommodationOrder = require('../models/accommodation_simple')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const accommodationOrders = await AccommodationOrder.find().populate('AccommodationOrder')

        return res.send({ accommodationOrders })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao buscar pedidos' })
    }

})

router.get('/:accommodationOrderId', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.findById(req.params.accommodationOrderId).populate('AccommodationOrder')


        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao buscar pedido' })
    }
})

router.post('/byuser/', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.find(req.body).populate('AccommodationOrder')


        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao buscar pedido' })
    }
})

router.post('/', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.create(req.body)

        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao criar novo pedido' })
    }

})

router.put('/', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.findByIdAndUpdate(req.params.accommodationOrderId, {
            pricePerNight,
            priceTotal,
            accommodationId
        }, { new: true })

        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao criar novo pedido' })
    }

})

router.delete('/:accommodationOrderId', async (req, res) => {
    try {
        await AccommodationOrder.findByIdAndRemove(req.params.accommodationOrderId)

        
        return res.send('Removido com sucesso!')
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao remover pedido' })
    }

})


module.exports = app => app.use('/orders', router)