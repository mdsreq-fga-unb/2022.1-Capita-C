"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express-promise-router')();
const user_controller_1 = require("../user.controller");
// rotas do CRUD de usuario
router.get('/users', user_controller_1.getsUser);
router.get('/users/:id', user_controller_1.getsUserById);
router.post('/users/register', user_controller_1.registerUser);
router.put('/users/edit/:id', user_controller_1.editUser);
router.delete('/users/delete/:id', user_controller_1.deleteUser);
module.exports = router;
