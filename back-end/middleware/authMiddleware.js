import asynchandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
const protect = asynchandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = await jwt.verify(token, process.env.SECERET_JWT)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('not authorized NO token')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('not authorized no token')
    }

})

export default protect