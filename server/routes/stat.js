import express from "express";
import { visitProduct } from "../controllers/stat.js";

const router = express.Router();

router.put("/:id", visitProduct);

export default router;
