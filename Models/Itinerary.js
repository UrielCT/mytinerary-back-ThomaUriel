import {Schema, model} from "mongoose";

const itinerarySchema = Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    city: { type: Schema.Types.ObjectId, ref:'_id'},
    price: { type: Number, required: true},
    duration: { type: Number, required: true},
    likes: { type: Number, default: 0},
    hashtags: { type: String, required: true}, 
    comments: { type: String}, 
},
{
    timestamps: true
}) 


const Itinerary = model('itineraries', itinerarySchema)

export default Itinerary