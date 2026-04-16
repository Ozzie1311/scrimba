export const filterData = (data, location, variable) => {
  return data.filter(
    (destination) =>
      destination[location].toLowerCase() === variable.toLowerCase(),
  )
}
