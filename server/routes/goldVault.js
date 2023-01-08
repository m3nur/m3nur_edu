import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/goldVault.js";
import { verifyTokenAndAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);

export default router;
