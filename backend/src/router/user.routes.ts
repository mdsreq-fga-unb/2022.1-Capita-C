const router = require('express-promise-router')();
import { getsUser, getsUserById, registerUser, editUser, deleteUser } from "../user.controller";
// rotas do CRUD de usuario

exports.router.get('/api', (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { success: string; message: string; version: string; }): void; new(): any; }; }; }) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0',
    });
});
exports.router.get('/users', getsUser);
exports.router.get('/users/:id', getsUserById);
exports.router.post('/users/register', registerUser);
exports.router.put('/users/edit/:id', editUser);
exports.router.delete('/users/delete/:id', deleteUser); 