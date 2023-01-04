import express from "express";
import { createProduct } from "../controllers/goldVault";

const router = express.Router();

router.post("/", createProduct);

export default router;
