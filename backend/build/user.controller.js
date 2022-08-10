"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.registerUser = exports.getsUserById = exports.login = exports.getsUser = void 0;
const pool = require("./database");
const getsUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield pool.query('SELECT * FROM users'); // consulta a banco de dados
        //console.log(response.rows)
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e); //caso tenha um erro no try ele pega e mostra no console
        return res.status(500).json('Nao foi possivel obter os usuarios');
    }
});
exports.getsUser = getsUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const email = user.email;
        const pass = user.senha;
        const response = yield pool.query('SELECT * FROM users WHERE email=$1', [email]); // consulta a banco de dados
        if (response.rows.length != 0) {
            const password = yield pool.query('SELECT password FROM users WHERE password=$1', [pass]);
            if (response.rows.length != 0) {
                return res.status(200).json(response.rows[0]); // retorna usuario encontrado
            }
            else {
                return res.status(400).json(false); // senha nao compativel
            }
        }
        else {
            return res.status(400).json(false); // usuario nao encontrado
        }
    }
    catch (e) {
        console.log(e); //caso tenha um erro no try ele pega e mostra no console
        return res.status(500).json('Nome nao encontrado');
    }
});
exports.login = login;
const getsUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idSelected = parseInt(req.params.id);
        const response = yield pool.query('SELECT * FROM users WHERE id = $1', [idSelected]); // seleciona o usuario com id passado por parametro
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Usuario nao encontrado');
    }
});
exports.getsUserById = getsUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const response = yield pool.query('INSERT INTO users (name,email,password) VALUES ($1, $2, $3)', [name, email, password]); // manda para o banco de dados um novo usuario com nome e email escritos no body
        return res.status(200).json({
            message: 'Usuario cadastrado com sucesso',
            body: {
                user: {
                    name,
                    email,
                    password
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Nao foi possivel cadastrar o usuario');
    }
});
exports.registerUser = registerUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUpdate = parseInt(req.params.id);
        const { name, email, password } = req.body;
        const response = yield pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $3=4', [name, email, password, idUpdate]); // manda para o banco de dados um novo usuario com nome e email escritos no body
        return res.status(200).json({
            message: `Usuario ${idUpdate} atualizado com sucesso`,
            body: {
                user: {
                    name,
                    email,
                    password
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Nao foi possivel atualizar o usuario');
    }
});
exports.editUser = editUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDelete = parseInt(req.params.id);
        const response = yield pool.query('DELETE FROM users WHERE id = $1', [idDelete]); // seleciona o usuario com id passado por parametro
        return res.status(200).json(`Usuario ${idDelete} deletado com sucesso`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Nao foi possivel deletar o usuario');
    }
});
exports.deleteUser = deleteUser;
