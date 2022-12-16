import express from 'express'
import{authUsers,getUserProfile,registerUser} from '../controller/userController.js'
import protect from '../middleware/authMiddleware.js'
const router=express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUsers)
router.route('/profile').get(protect,getUserProfile)


export default router