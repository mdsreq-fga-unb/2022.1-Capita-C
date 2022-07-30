const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// conexao com base de dados
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('conect', () => {
    console.log('Base de Dados conectada com sucesso')
});

module.exports = {
    query: (text: any, params: any) => pool.query(text, params),
};