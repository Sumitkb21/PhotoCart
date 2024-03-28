import express from "express" ;
import { getProfile, userLogin, userRegister } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { addImage, adminLogin, adminRegister, deleteImage, getAllImage, getImageDetails, updateImage } from "../controllers/admin.js";
import { isAuthenticatedAdmin } from "../middlewares/auth.js";

const router = express.Router();



//user routes
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);

///authentication
router.get("/userHome",isAuthenticated,getProfile);

//admin routes
router.get("/getall", getAllImage);
router.post("/image/new", addImage);
router.put("/image/update/:id", updateImage);
router.delete("/image/delete/:id", deleteImage);
router.get("/image/get/:id", getImageDetails);

router.post("/adminLogin", adminLogin);
router.post("/adminRegister", adminRegister);

///authentication
router.get("/adminHome",isAuthenticatedAdmin,getProfile);

export default router;