import { Router } from "express";
import userController from "../../controllers/userController";
import { isAdmin } from "../../middlewares/authMiddlewares";

const router = Router();

router.get("/", isAdmin, userController.list);
router.get("/:cpf", isAdmin, userController.retrieve);
router.patch("/:cpf", isAdmin, userController.update);
router.delete("/:cpf", isAdmin, userController.destroy);
router.put("/add", isAdmin, userController.create);

// Exemplo para limitar acesso a uma rota restrita a administradores
// router.get("/test", isAdmin, (req, res) => res.json(req.user));
export default router;
