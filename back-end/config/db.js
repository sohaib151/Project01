import mongoose from "mongoose";


const connectDB=async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongoDB connected : ${conn.connection.host}`.cyan.underline.bgGreen);
    } catch (error) {
        console.log(`Error Message :${error.message}`.bold.red);
        process.exit(1)
    }
}


export default connectDB