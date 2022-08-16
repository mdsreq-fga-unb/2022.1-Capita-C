"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute = express_1.default.Router();
const user_controller_1 = require("../user.controller");
// rotas do CRUD de usuario
userRoute.get('/', user_controller_1.getsUser);
userRoute.post('/login', user_controller_1.login);
userRoute.get('/:id', user_controller_1.getsUserById);
userRoute.post('/register', user_controller_1.registerUser);
userRoute.put('/edit/:id', user_controller_1.editUser);
userRoute.delete('/delete/:id', user_controller_1.deleteUser);
exports.default = userRoute;
