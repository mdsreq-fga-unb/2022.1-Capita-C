import { Router } from "express";
import userRoute from "./api/userRoute";
import authRoute from "./api/authRoute";
import { isAuthenticated } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", (req, res) => res.send("Bem vindo ao CapitaC API"));
router.use("/user", isAuthenticated, userRoute);
router.use("/auth", authRoute);
export default router;
