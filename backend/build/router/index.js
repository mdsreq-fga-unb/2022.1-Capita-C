"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // router e um modulo que permite criar rotas para o servidor
const router = (0, express_1.Router)();
router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0',
    });
});
exports.default = router;
