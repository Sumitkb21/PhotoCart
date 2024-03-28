import { Admin } from "../models/admin.js";
import { Photos } from "../models/photos.js";
import { User } from "../models/users.js";
import { send_cookies } from "../utils/features.js";
import bcrypt from "bcrypt";

export const getAllImage = async(req,res,next) =>{
    try {
        const Images  = await Photos.find();

        res.status(200).json({
            success: true,
            Images,
        })    
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Error: Not able to get",
        })
    }
        
}



export const getImageDetails = async(req,res,next) =>{
    try {
        let product = await Photos.findById(req.params.id);
        if(!product){
            return res.status(401).json({
                success: false,
                message: "Image not exist"
            })  
        }
       
        
        res.status(200).json({
            success: true,
            product,
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error:Not able to mage not exist"
        })  
    }
      
}



export const addImage = async(req,res,next) =>{
    try {
        const {name, description, price, image, category}  = req.body;
   
        await Photos.create({
            name, 
            description, 
            price, 
            image, 
            category
        })
    
        res.status(201).json({
            success: true,
            message: "Created succesfully"
        })

    } catch (error) {
         res.status(400).json({
            success: false,
            message: "Error: Not able to Create"
        })
    }
        
}


export const deleteImage = async(req,res,next) =>{
    try {
        let product  =  await Photos.findById(req.params.id);
    
        if(!product){
            return res.status(401).json({
                success: false,
                message: "Image not exist"
            })  
        }
        await Photos.deleteOne({_id: req.params.id});
    
    
        res.status(200).json({
            success: true,
            message: "Deleted succesfully"
        })

    } catch (error) {
        res.status(403).json({
            success:false,
            message: "Error: Not able to delete"
        })
    }
       
}


export const updateImage = async(req,res,next) =>{
    try {
        let product  =  await Photos.findById(req.params.id);
        console.log(product);
        const {name, description, price, image, category}  = req.body;
         
        if(!product){
            return res.status(401).json({
                success: false,
                message: "Image not exist"
            })  
        }
    
        
        const update = {
            $set: {
                name:name,
                description:description,
                price: price,
                image:image,
                category:category
                
            
                 // Update the status to 'cancelled', for example
                // You can add more fields to update as needed
            }
        };
       await Photos.findByIdAndUpdate({_id:req.params.id} , update) 
    
        res.status(200).json({
            success: true,
            message: "Updated Succesfully"
        })
        
    } catch (error) {
        
        return res.status(400).json({
            success: false,
            message: "Error: not able to update"
        })
    }
    
      
}




export const adminRegister = async (req, res) => {
    const { firstname,lastname, username, password, email, } = req.body; // distructering values from an object
    let admin = await Admin.findOne({ email });
    let user = await User.findOne({ email });
  
  
    if (admin){ 
        
        return res.status(404).json({
        success: false,
        message: "Admin Already Exist",
      });
    
    }
    else{
        if (user){ 
        
            return res.status(404).json({
            success: false,
            message: "User Already Exist",
          });
        
        }   
    }
     
    // console.log("herere")
  
    const hashedpassword = await bcrypt.hash(password, 10);
  
    admin = await Admin.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedpassword,
    });
  
    send_cookies(admin, res, "Registered Succesfully", 201);
  };
  
  
  
  export const adminLogin = async (req, res) => {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
  
      if (!admin)
        return res.status(404).json({
          success: false,
          message: "Admin dosen't Exist",
        });
    
      const isMatch = await bcrypt.compare(password, admin.password);
    
      if (!isMatch)
        return res.status(404).json({
          success: false,
          message: "Invalid Password",
        });
    
      send_cookies(admin, res, `Welcome back ${admin.firstname}`, 200);
    };
  
  

