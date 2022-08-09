const router = require('express-promise-router')();
import { getsUser, getsUserById, registerUser, editUser, deleteUser } from "../user.controller";

// rotas do CRUD de usuario
exports.router.get('/users', getsUser);
exports.router.get('/users/:id', getsUserById);
exports.router.post('/users/register', registerUser);
exports.router.put('/users/edit/:id', editUser);
exports.router.delete('/users/delete/:id', deleteUser); 