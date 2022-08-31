import { Router } from "express";
import cadastroCnpjController from "../../controllers/cadastroCnpjController";
import { isAdmin, isManager } from "../../middlewares/authMiddlewares";

const router = Router();

router.get("/", cadastroCnpjController.list);
router.post("/add", cadastroCnpjController.createCnpj);
router.patch("/:cnpjFinal", cadastroCnpjController.update);
router.delete("/:cnpjFinal", cadastroCnpjController.destroy);

export default router;
