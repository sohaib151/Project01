import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'
const router=express.Router()
import {getProduct,getProductById } from '../controller/productController.js'

// router.get('/',asyncHandler(async(req,res)=>{
//     const products=await Product.find({})
    
//     res.json(products)
// }))

// router.get('/:id',asyncHandler(async(req,res)=>{
    // const product=products.find(p=>p._id===req.params.id)
//     const product=await Product.findById(req.params.id)
//     if(product){
//         res.json(product)
//      }else{
//         res.status(404)
//         throw new Error ('Product Not Found')
//      }
// }))


router.route('/').get(getProduct)
router.route('/:id').get(getProductById)

export default router