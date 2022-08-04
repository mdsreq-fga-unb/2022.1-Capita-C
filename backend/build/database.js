"use strict";
const { Pool } = require('pg');
require('dotenv').config();
// conexao com base de dados
const pool = new Pool({
    user: 'postgres',
    host: 'capitac_ct',
    database: 'capitac_db',
    password: 'A7Y7c1E*',
    port: 5432,
});
pool.on('conect', () => {
    console.log('Base de Dados conectada com sucesso');
});
module.exports = {
    query: (text, params) => pool.query(text, params),
};
