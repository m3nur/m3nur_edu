import express from "express";
import {
  addMessage,
  deleteMessage,
  getMessages,
} from "../controllers/message.js";
import { verifyTokenAndAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", addMessage);
router.get("/", verifyTokenAndAdmin, getMessages);
router.delete("/:id", verifyTokenAndAdmin, deleteMessage);

export default router;
