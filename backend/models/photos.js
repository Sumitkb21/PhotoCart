import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
       type: String,
       required : true,
       trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: [true,"Please enter the price of the Image"],
    },  
    image: {
        public_id :{
            type: String,
            required: true,
        },
        url:{
            type:String,
            required: true,
        }
    },
    category:{
        type:String,
        required: [true,"Please enter the category of the Image"]
    },
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 


export const Photos = mongoose.model("photos" , schema );

 




