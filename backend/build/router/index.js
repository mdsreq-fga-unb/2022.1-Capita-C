"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // router e um modulo que permite criar rotas para o servidor
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
router.get('/users', index_controller_1.getsUser);
router.get('/users/:id', index_controller_1.getsUserById);
router.post('/users/register', index_controller_1.registerUser);
router.put('/users/edit/:id', index_controller_1.editUser);
router.delete('/users/delete/:id', index_controller_1.deleteUser);
exports.default = router;
