import { Pool } from 'pg'; 

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'A7Y7c1E*',
    database: 'firstapi',
    port: 5432
})