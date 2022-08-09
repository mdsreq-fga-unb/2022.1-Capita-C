"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const cors = require('cors');
const app = (0, express_1.default)();
app.get("/", (req, res) => res.send("Welcome"));
//middlewares: converte um .json num objeto
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors());
app.use(router_1.default);
// porta usada para hostear a pagina
const port = 4000;
app.listen(port);
console.log("Server on port", port);
