import { User } from "../models/users.js";
import bcrypt from "bcrypt";
import { send_cookies } from "../utils/features.js";
import { Admin } from "../models/admin.js";

export const userRegister = async(req,res,next) =>{
    try {
        const {firstname, lastname, username, password, email} = req.body;

        let user = await User.findOne({email});
        let admin = await Admin.findOne({email});

        if(user){
            return res.status(400).json({
                success : false,
                message: "User already exist"
            })
        }
        else{
            if(admin){
                return res.status(400).json({
                    success : false,
                    message: "Admin already exist"
                })  
            }
        }

        const hashedpassword = await bcrypt.hash(password, 10);


        user = await User.create({
            firstname,
            lastname, 
            username,
            password:hashedpassword,
            email
        })
        send_cookies(user, res, "Registered Succesfully", 201);
            
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Error: Not able to create",
        })
    }
        
}



export const userLogin = async (req, res, next) => {
    const { email, password } = req.body; // distructering values from an object
    const user = await User.findOne({ email });
  
    if (!user)
      return res.status(404).json({
        success: false,
        message: "Sign In first",
      });
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch)
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
  
    send_cookies(user, res, `Welcome back ${user.firstname}`, 200);
  };



  
export const getProfile = (req, res) => {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  };