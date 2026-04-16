import { PGlite } from '@electric-sql/pglite'
import fs from 'fs'
;(async () => {
  const database = new PGlite()

  //Setup up the DB files
  const createTables = fs.readFileSync('create-tables.sql', 'utf8')
  const insertCarsData = fs.readFileSync('insert-cars-data.sql', 'utf8')
  await database.exec(createTables)
  await database.exec(insertCarsData)

  //Run the changes made in DM section
  const crudOperations = fs.readFileSync('crud-operations.sql', 'utf8')
  await database.exec(crudOperations)

  //Load the SQL query file
  const query = fs.readFileSync('query.sql', 'utf8')

  //Run the query from the query file
  const response = await database.query(query)

  console.clear()
  console.table(response.rows)
})()
