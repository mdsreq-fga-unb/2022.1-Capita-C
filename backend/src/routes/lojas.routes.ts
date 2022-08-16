import express from "express";
const storeRoute = express.Router();

storeRoute.get("/createStore", (req, res) => res.send("Cadastra loja"));

export default storeRoute;