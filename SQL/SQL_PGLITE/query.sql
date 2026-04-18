--Nos va a tirar todo, tanto las coincidencias como los valores sin coincidencia que los referenciara como nulos
--SELECT name, role, city, state FROM staff
--FULL JOIN dealerships ON dealership_id = dealerships.id;

--Nos va a tirar todas las coincidencias
-- SELECT name, role, city, state FROM staff
-- INNER JOIN dealerships ON dealership_id = dealerships.id;

/*
	Select the city and average car price
	Round that car price to a whole number
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/

-- SELECT city, state, ROUND(AVG(price), 2) AS avg_price FROM cars
-- LEFT JOIN dealerships D ON dealership_id = D.id
-- GROUP BY city, state;

/*
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
*/

-- SELECT name, role, SUM(sold_price) AS total_sales FROM staff S
-- LEFT JOIN sold_cars SC ON S.id = seller
-- WHERE role = 'Salesperson'
-- GROUP BY S.name, S.role
-- ORDER BY total_sales DESC;

/*
	Select the city, state and
		count the total number of cars in each dealership
		alias the count as car_count
	
	Use cars as the left table, and dealerships as the right table
		choosing a join which will show every dealership
		
	Include a condition to count unsold cars
	
	Group by dealership city and state
	Order by the car_count
*/

-- SELECT city, state, COUNT(cars.id) AS car_count FROM cars
-- RIGHT JOIN dealerships D ON dealership_id = D.id 
-- WHERE sold IS NOT TRUE
-- GROUP BY D.city, D.state
-- ORDER BY car_count;

SELECT * FROM cars
ORDER BY dealership_id DESC;