import jwt from "jsonwebtoken";
import env from "../utils/env"
import prisma from "../databaseClient"

interface Payload {
    userID: string; // CPF
}

function encode(payload: Payload) {
    return jwt.sign(payload, env.PRIVATE_KEY);
}

function verify(token: string) {
    return jwt.verify(token, env.PRIVATE_KEY);
}

async function login(cpf: string, pass: string) {
    const user = await prisma.user.findUnique({
        where: {
            cpf,
        },
        select: {
            password: true,
        }
    })

    if (user === null || user.password !== pass) {
        throw new Error("Usuário não encontrado");
    }

    // Retorna um jwt com payload contendo o ID (cpf) do usuario
    return encode({ userID: cpf })

}


export default {
    encode,
    verify,
    login,
}

