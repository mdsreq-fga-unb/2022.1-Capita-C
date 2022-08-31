import { Router } from "express";
import telefoneController from "../../controllers/telefoneController";

const router = Router();

router.get("/", telefoneController.list);
router.post("/add", telefoneController.create);
router.patch("/:numeroTelefone", telefoneController.update);
router.delete("/:numeroTelefone", telefoneController.destroy);

export default router;
