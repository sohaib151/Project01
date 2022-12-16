import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @dsc get all the products
// @req  get/api/products
// @auth   public
const getProduct=asyncHandler(async(req,res)=>{
const products=await Product.find({})
res.json(products)
})
// @dsc get single  product
// @req  get/api/products/:id
// @auth   public
const getProductById=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product Not Found!!')
    }
    })
    

    export{getProduct,getProductById}