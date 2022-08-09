import { Request, Response } from "express";
import { QueryResult } from "pg";
const pool = require("./database");

export const getsUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users') // consulta a banco de dados
        //console.log(response.rows)
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e) //caso tenha um erro no try ele pega e mostra no console
        return res.status(500).json('Server Error')
    }

}

export const getsUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const idSelected = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [idSelected]) // seleciona o usuario com id passado por parametro
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json('Usuario nao encontrado')
    }
}

export const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO users (name,email,password) VALUES ($1, $2, $3)', [name, email, password]) // manda para o banco de dados um novo usuario com nome e email escritos no body
        return res.status(200).json({
            message: 'Usuario cadastrado com sucesso',
            body: {
                user: {
                    name,
                    email,
                    password
                }
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json('Nao foi possivel cadastrar o usuario')
    }
}

export const editUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const idUpdate = parseInt(req.params.id)
        const { name, email, password } = req.body;
        const response: QueryResult = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $3=4', [name, email, password, idUpdate]) // manda para o banco de dados um novo usuario com nome e email escritos no body
        return res.status(200).json({
            message: `Usuario ${idUpdate} atualizado com sucesso`,
            body: {
                user: {
                    name,
                    email,
                    password
                }
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json('Nao foi possivel atualizar o usuario')
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const idDelete = parseInt(req.params.id)
        const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [idDelete]) // seleciona o usuario com id passado por parametro
        return res.status(200).json(`Usuario ${idDelete} deletado com sucesso`)
    } catch (e) {
        console.log(e)
        return res.status(500).json('Nao foi possivel deletar o usuario')
    }
}