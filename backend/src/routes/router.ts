import express from "express";
import storeRoute from "./lojas.router";
import userRoute from "./user.routes";
const router = express.Router();

router.get("/api", (req, res) => res.send("Welcome to the API!"));
router.use("/users", userRoute);
router.use("/stores", storeRoute);

export default router;