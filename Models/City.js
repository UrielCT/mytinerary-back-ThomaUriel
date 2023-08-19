import {Schema, model} from "mongoose";

const citySchema = Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    country: { type: String, required: true},
    description: { type: String, required: true},
    currency: { type: String, required: true},
    language: { type: String, required: true} 
},
{
    timestamps: true
}) 


const City = model('cities', citySchema)

export default City