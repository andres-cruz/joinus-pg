-- This table is for a demo app only. It's not intended for a production environment. 
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100), 
    email VARCHAR(100),
    joined TIMESTAMP NOT NULL
);