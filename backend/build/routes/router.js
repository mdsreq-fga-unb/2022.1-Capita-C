"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lojas_router_1 = __importDefault(require("./lojas.router"));
const user_routes_1 = __importDefault(require("./user.routes"));
const router = express_1.default.Router();
router.get("/api", (req, res) => res.send("Welcome to the API!"));
router.use("/users", user_routes_1.default);
router.use("/stores", lojas_router_1.default);
exports.default = router;
