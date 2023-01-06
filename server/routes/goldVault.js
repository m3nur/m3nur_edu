import express from "express";
import { createProduct, getProduct } from "../controllers/goldVault.js";
import { verifyTokenAndAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getProduct);

export default router;
