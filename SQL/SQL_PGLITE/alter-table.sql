--Alterar tabla
ALTER TABLE cars
ADD COLUMN dealership_id INT;

-- Actualizar tabla
UPDATE cars 
SET dealership_id = 1
WHERE dealership_id IS NULL;

-- Agregar la restricción not null
ALTER TABLE cars
ALTER COLUMN dealership_id SET NOT NULL;

--Agregar la restricción de clave foranea
ALTER TABLE cars
ADD CONSTRAINT dealership_fk FOREIGN KEY (dealership_id)
REFERENCES dealerships (id);

--Agregar restricción a las columnas siguientes(brand, model, year, price, color, condition, sold)
ALTER TABLE cars
ALTER COLUMN brand SET NOT NULL,
ALTER COLUMN model SET NOT NULL,
ALTER COLUMN year SET NOT NULL,
ALTER COLUMN price SET NOT NULL,
ALTER COLUMN color SET NOT NULL,
ALTER COLUMN condition SET NOT NULL,
ALTER COLUMN sold SET NOT NULL;