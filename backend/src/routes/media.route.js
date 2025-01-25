import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import { getMediaFiles } from "../controllers/media.controller.js";
const router = express.Router();

router.get("/mediaFiles", protectRoute, getMediaFiles);

export default router;