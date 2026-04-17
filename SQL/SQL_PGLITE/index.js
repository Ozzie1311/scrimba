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

  //Populate our new tables
  const populateTables = fs.readFileSync('populate-tables.sql', 'utf8')
  await database.exec(populateTables)

  //Alter table
  const alterTables = fs.readFileSync('alter-table.sql', 'utf8')
  await database.exec(alterTables)

  //Alter constraints
  const alterConstraints = fs.readFileSync('alter-constraint.sql', 'utf8')
  await database.exec(alterConstraints)

  //Insert new Data
  const insertNewData = fs.readFileSync('insert-new-data.sql', 'utf8')
  await database.exec(insertNewData)

  //Load the SQL query file
  const query = fs.readFileSync('query.sql', 'utf8')

  //Run the query from the query file
  const response = await database.query(query)

  console.clear()
  console.table(response.rows)
})()
