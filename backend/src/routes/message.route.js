import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage, deleteMessage1, deleteMessage2 } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

// for delete messages feature
router.delete("/deleteMessage1/:id", protectRoute, deleteMessage1);
router.delete("/deleteMessage2/:id", protectRoute, deleteMessage2);

export default router;