import { startups } from '../data/data.js'

export const queryFunction = (req, res) => {
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query
  let filteredData = startups.filter((s) => {
    return (
      (!industry || s.industry.toLowerCase() === industry.toLowerCase()) &&
      (!country || s.country.toLowerCase() === country.toLowerCase()) &&
      (!continent || s.continent.toLowerCase() === continent.toLowerCase()) &&
      (is_seeking_funding === undefined ||
        s.is_seeking_funding.toString() === is_seeking_funding) &&
      (has_mvp === undefined || s.has_mvp.toString() === has_mvp)
    )
  })

  return filteredData
}
