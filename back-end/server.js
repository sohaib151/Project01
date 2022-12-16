import express  from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRouter from './routes/productsRoutes.js'
import userRouter from './routes/userRoutes.js'
import path from 'path'
import { notFound ,errorHandler} from './middleware/errorMiddleware.js'

const app=express()
dotenv.config()
connectDB()
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('API is running')
// })

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)

const __dirname=path.resolve()
app.use(express.static(path.join(__dirname,'./front-end/build')))

app.get('*',function(req,res){
res.sendFile(path.join(__dirname,'./front-end/build/index.html'))
})
const Sk=path.join(__dirname,'/front-end/build/index.html')
console.log(Sk);
app.use(notFound)

app.use(errorHandler)
// app.get('/api/products',(req,res)=>{
//     res.json(products)
// })

// app.get('/api/products/:id',(req,res)=>{
//     const product=products.find(p=>p._id===req.params.id)
//     res.json(product)
// })

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`app is running in ${process.env.NODE_ENV} at the port  ${PORT}`.bgYellow.white.bold))