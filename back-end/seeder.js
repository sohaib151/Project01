import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'


dotenv.config()
connectDB()


const ImportData=async()=>{
    try {
       await Order.deleteMany()
       await User.deleteMany()
       await Product.deleteMany()

     const createdUser=await User.insertMany(users)
     const adminUser=createdUser[3]._id

     const sampleProduct=products.map(product=>{
        return{...product,user:adminUser}
     })

        await Product.insertMany(sampleProduct)
        console.log(`Data Imported!`.green.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}
const DestroyData=async()=>{
    try {
       await Order.deleteMany()
       await User.deleteMany()
       await Product.deleteMany()

        console.log(`Data destroy!`.red.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}

if(process.argv[2]==='-d'){
    DestroyData()
}else{
    ImportData()
}