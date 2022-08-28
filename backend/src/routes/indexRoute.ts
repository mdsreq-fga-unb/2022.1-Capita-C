import { Router } from "express";
import apiRoute from "./apiRoute";

const router = Router();

router.get("/", (req, res) => res.send("Capita-C"));
router.use("/api", apiRoute);

export default router;
