import { Router } from "express";
import userController from "../../controllers/userController";
import { isAdmin, isConsultor } from "../../middlewares/authMiddlewares";

const router = Router();

router.get("/", userController.list);
router.get("/search/:cpf", userController.retrieve);
router.patch("/search/:cpf", userController.update);
router.delete("/search/:cpf", userController.destroy);

router.get("/test", isConsultor, (req, res) => res.json(req.user));
export default router;
