const express = require('express')
const authMiddleware = require('../middlewares/auth')

const AccommodationOrder = require('../models/accommodation')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const accommodationOrders = await AccommodationOrder.find().populate('user')

        return res.send({ accommodationOrders })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao buscar pedidos' })
    }

})

router.get('/:accommodationOrderId', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.findById(req.params.accommodationOrderId).populate('user')


        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao buscar pedido' })
    }

})

router.get('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})
router.post('/', async (req, res) => {
    try {
        const accommodationOrder = await AccommodationOrder.create({ ...req.body, user: req.userId })

        return res.send({ accommodationOrder })
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao criar novo pedido' })
    }

})

router.put('/:accommodationOrderId', async (req, res) => {
    res.send({ user: req.userId })
})

router.delete('/:accommodationOrderId', async (req, res) => {
    try {
        await AccommodationOrder.findById(req.params.accommodationOrderId)

        
        return res.send('Removido com sucesso!')
        
    } catch (err){
        return res.status(400).send({ error: 'Erro ao remover pedido' })
    }

})


module.exports = app => app.use('/orders', router)