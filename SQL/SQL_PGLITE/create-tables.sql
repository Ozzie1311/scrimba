CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    brand TEXT,
    model TEXT,
    year INTEGER,
    price INTEGER,
    color TEXT,
    condition INTEGER,
    sold BOOLEAN
);

CREATE TABLE IF NOT EXISTS dealerships (
    id SERIAL PRIMARY KEY,
    city TEXT NOT NULL,
    state CHAR(2) NOT NULL,
    established DATE NOT NULL
);