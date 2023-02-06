import mongoose from "mongoose";

const cardsSchema=mongoose.Schema({
    name:String,
    image:String
})
export default mongoose.model("data",cardsSchema,"data")