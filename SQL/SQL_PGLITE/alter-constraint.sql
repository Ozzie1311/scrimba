ALTER TABLE staff
ALTER COLUMN dealership_id DROP NOT NULL;

--Agregando nuevos ingresos sin sucursal
INSERT INTO staff (name, role)
 VALUES
    ('Tony Turner', 'Salesperson'),
    ('Axel Grimes', 'Salesperson'),
    ('Elle Bowgrease', 'Salesperson');

--Agregando nuevos concesionarios
INSERT INTO dealerships (city, state, established)
VALUES 
    ( 'Houston', 'TX', '2027-07-04' ),
	( 'Phoenix', 'AZ', '2027-07-04' ),
	( 'Dallas', 'TX', '2027-07-04' ),
	( 'Austin', 'TX', '2027-07-04' ),
	( 'Boston', 'MA', '2027-07-04');

-- ALTER TABLE sold_cars
-- ALTER COLUMN seller DROP NOT NULL;

-- UPDATE sold_cars 
-- SET seller = NULL
-- WHERE seller = 5;

-- DELETE from staff
-- WHERE name = 'Frankie Fender';