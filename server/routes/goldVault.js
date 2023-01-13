import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  likeProduct,
  unLikeProduct,
  updateProduct,
  visitProduct,
} from "../controllers/goldVault.js";
import { verifyTokenAndAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.put("/like", likeProduct);
router.put("/unlike", unLikeProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.put("/visit/:id", visitProduct);

export default router;
