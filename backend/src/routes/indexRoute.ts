import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.send("Capita-C"));

export default router;
