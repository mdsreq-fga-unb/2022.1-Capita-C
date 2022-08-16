"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storeRoute = express_1.default.Router();
storeRoute.get("/createStore", (req, res) => res.send("Cadastra loja"));
exports.default = storeRoute;
