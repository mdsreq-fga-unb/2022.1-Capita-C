import { Router } from "express"; // router e um modulo que permite criar rotas para o servidor
import { getsUser, getsUserById, registerUser, editUser, deleteUser  } from "../controllers/index.controller";

const router = Router();

router.get('/users', getsUser);
router.get('/users/:id', getsUserById);
router.post('/users/register', registerUser);
router.put('/users/edit/:id', editUser);
router.delete('/users/delete/:id', deleteUser);

export default router;