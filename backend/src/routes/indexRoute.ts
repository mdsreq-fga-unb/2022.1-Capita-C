import { Router } from "express";
import apiRoute from "./apiRoute";

const router = Router();

router.get("/", (req, res) => res.json(req.headers.authorization));
router.use("/api", apiRoute);

export default router;
