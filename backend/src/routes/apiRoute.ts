import { Router } from "express";
import userRoute from "./api/userRoute";

const router = Router();

router.get("/", (req, res) => res.send("Bem vindo ao CapitaC API"));
router.use("/user", userRoute);

export default router;
