import { Router } from "express";
import cadastroCnpjController from "../../controllers/cadastroCnpjController";
import { isAdmin } from "../../middlewares/authMiddlewares";

const router = Router();

router.get("/", cadastroCnpjController.list);
router.get("/:cnpjFinal", cadastroCnpjController.retrieve);
router.post("/add", cadastroCnpjController.createCnpj);
router.put("/:cnpjFinal", cadastroCnpjController.update);
router.delete("/:cnpjFinal", isAdmin, cadastroCnpjController.destroy);

export default router;
