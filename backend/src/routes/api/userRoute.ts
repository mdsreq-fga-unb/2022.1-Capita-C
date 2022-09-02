import { Router } from "express";
import cadastroCnpjController from "../../controllers/cadastroCnpjController";
import userController from "../../controllers/userController";
import { isAdmin, isAdminOrManager } from "../../middlewares/authMiddlewares";

const router = Router();

router.get("/", isAdminOrManager, userController.list);
router.get("/:cpf", isAdmin, userController.retrieve);
router.patch("/:cpf", isAdmin, userController.update);
router.delete("/:cpf", isAdmin, userController.destroy);
router.put("/add", isAdmin, userController.create);

router.post("/designate", isAdminOrManager, cadastroCnpjController.designate);

// Exemplo para limitar acesso a uma rota restrita a administradores
// router.get("/test", isAdmin, (req, res) => res.json(req.user));
export default router;
