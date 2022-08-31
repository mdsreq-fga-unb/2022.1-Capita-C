import { Router } from "express";
import cadastroCnpjController from "../../controllers/cadastroCnpjController";

const router = Router();

router.get("/", cadastroCnpjController.list);
router.post("/add", cadastroCnpjController.createCnpj);
router.patch("/:cnpjFinal", cadastroCnpjController.update);
router.delete("/:cnpjFinal", cadastroCnpjController.destroy);

export default router;
