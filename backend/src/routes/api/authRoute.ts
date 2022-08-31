import HttpError from "http-errors";
import { Router } from "express";
import authService from "../../services/authService";

const router = Router();

router.post("/login", async (req, res) => {
  const { cpf, password } = req.body;

  try {
    const token = await authService.login(cpf, password);
    return res.json({ token });
  } catch (error) {
    throw new HttpError.Unauthorized();
  }
});

export default router;
