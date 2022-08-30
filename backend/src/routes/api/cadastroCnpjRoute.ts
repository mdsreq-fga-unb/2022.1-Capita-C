import { Router } from "express";
import cadastroCnpjController from "../../controllers/cadastroCnpjController";
import { isAdmin, isConsultor } from "../../middlewares/authMiddlewares";

const router = Router();
router.get("/", cadastroCnpjController.list);
router.post("/add", cadastroCnpjController.create);
export default router;
