CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    name varchar(40),
    email text,
    password text
);