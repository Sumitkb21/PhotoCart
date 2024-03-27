import mongoose from "mongoose";

export const connectDB = () => mongoose.connect(process.env.MONGO_URI, {
    dbName: "photocart",
})
.then(()=> console.log("database connected "))
.catch((e)=> console.log(e));
