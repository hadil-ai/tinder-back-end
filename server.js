const express=require('express');
const mongoose=require("mongoose")
dotenv.config()
//app config
const app=express()
const port=9000
const connectUrl=`mongodb+srv://admin:WLAnSd1NpNIW8Pwycluster0.yde1grw.mongodb.net/database?retryWrites=true&w=majority`
//MiddleWares
app.use(express.json())
app.use(cors())
//db conifg 
mongoose.connect(connectUrl,{
    useNewUrlParser:true
})
const db=mongoose.connection
// Api endpoints
app.get("/",async(req,res)=>{
    res.send("yo")
})
//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})
