import express from "express";
import { addMessage } from "../controllers/message.js";
// import { verifyTokenAndAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", addMessage);

export default router;
