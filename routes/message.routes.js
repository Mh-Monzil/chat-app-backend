import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:id", verifyJWT, getMessage);
router.post("/send/:id", verifyJWT, sendMessage);

export default router;
