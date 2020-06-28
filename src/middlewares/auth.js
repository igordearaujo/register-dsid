const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send({ error: 'Não autorizado'} )
    }

    const parts = authHeader.split(' ')

    if(parts.length !== 2)
        return res.status(401).send({ error: 'Token error' })
    
    const [ scheme, token ] = parts


    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token Inválido' })
        
        req.userId = decoded.id
        return next()
    })
}