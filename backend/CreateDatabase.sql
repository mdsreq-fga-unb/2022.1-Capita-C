CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    name varchar(40),
    email text not null unique,
    password text not null
);