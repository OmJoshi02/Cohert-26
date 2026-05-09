import "dotenv/config"
import app from "./src/app.js"
import connectDB from "./src/common/config/db.js"


const PORT = process.env.PORT || 5000 //automatically it takes port from server (used for production)



const start = async () =>{
    //connect to db
    await connectDB() 
    app.listen(PORT, ()=>{
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV}`)
    })
}

start().catch((err) =>{
    console.error("failed to start server...",err)
    process.exit(1)
})


