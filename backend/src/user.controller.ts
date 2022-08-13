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
        return res.status(500).json('Nao foi possivel obter os usuarios')
    }

}

export const login = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const cpf = user.cpf;
        const pass = user.senha;
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE cpf=$1', [cpf]) // consulta a banco de dados
        if(response.rows.length != 0){
            const password: QueryResult = await pool.query('SELECT password FROM users WHERE password=$1', [pass])
            if(response.rows.length != 0){
                return res.status(200).json(response.rows[0]) // retorna usuario encontrado
            }else{
                return res.status(400).json(false) // senha nao compativel
            }
        }else{
            return res.status(400).json(false) // usuario nao encontrado
        }
    } catch (e) {
        console.log(e) //caso tenha um erro no try ele pega e mostra no console
        return res.status(500).json('Nome nao encontrado')
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
        const { name, email, cpf, admin, password } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO users (name,email, cpf, admin, password) VALUES ($1, $2, $3, $4, $5)', [name, email, cpf, admin, password]) // manda para o banco de dados um novo usuario com nome e email escritos no body
        return res.status(200).json({
            message: 'Usuario cadastrado com sucesso',
            body: {
                user: {
                    name,
                    email,
                    cpf,
                    admin,
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
        const { name, email, cpf, password } = req.body;
        const response: QueryResult = await pool.query('UPDATE users SET name = $1, email = $2, cpf = $3, password = $4 WHERE id = $4', [name, email, cpf, password, idUpdate]) // manda para o banco de dados um novo usuario com nome e email escritos no body
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