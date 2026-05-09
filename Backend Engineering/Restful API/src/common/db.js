import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URI);
    //what is inside in connection

    console.log(`MongoDB connected : ${conn.connection.host}`)
}

export default connectDB
