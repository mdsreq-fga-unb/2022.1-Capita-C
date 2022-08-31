import { Router } from "express";
import emailController from "../../controllers/emailController";

const router = Router();

router.get("/", emailController.list);
router.post("/add", emailController.create);
router.patch("/:email", emailController.update);
router.delete("/:email", emailController.destroy);

export default router;
