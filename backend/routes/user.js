import express from "express" ;
import { addImage, deleteImage, getAllImage, getImageDetails, updateImage } from "../controllers/admin.js";

const router = express.Router();

router.get("/getall", getAllImage);
router.post("/image/new", addImage);
router.put("/image/update/:id", updateImage);
router.delete("/image/delete/:id", deleteImage);
router.get("/image/get/:id", getImageDetails);

export default router;