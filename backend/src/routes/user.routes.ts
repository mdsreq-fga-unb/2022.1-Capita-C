import express from "express";
const userRoute = express.Router();
import { getsUser, getsUserById, registerUser, editUser, deleteUser, login } from "../user.controller";

// rotas do CRUD de usuario
userRoute.get('/', getsUser);
userRoute.post('/login', login)
userRoute.get('/:id', getsUserById);
userRoute.post('/register', registerUser);
userRoute.put('/edit/:id', editUser);
userRoute.delete('/delete/:id', deleteUser);

export default userRoute;