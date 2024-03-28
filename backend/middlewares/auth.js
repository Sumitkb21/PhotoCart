import jwt from "jsonwebtoken"

import { User } from "../models/users.js";
import { Admin } from "../models/admin.js";

export const isAuthenticated = async(req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(req.headers.cookies);
    if(!token) return res.status(401).json({
        success: false,
        message: "Login first",
    });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    

    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "Login first",
        }); 
    }


    next();

} 





export const isAuthenticatedAdmin = async(req,res,next) =>{
    
    const {token} = req.cookies;
    console.log(req.headers.cookies);
    if(!token) return res.status(401).json({
        success: false,
        message: "Login first",
    });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Admin.findById(decoded._id);
    
    if(!req.user){
        return res.status(401).json({
            success: false,
            message: "Login first",
        }); 
    }

    next();

}
