import { Router } from "express";
import userController from "../../controllers/userController";

const router = Router();

router.get("/", userController.list);
router.get("/:cpf", userController.retrieve);
router.patch("/:cpf", userController.update);
router.delete("/:cpf", userController.destroy);

export default router;
