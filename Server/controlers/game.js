const metadata = require("../utils/metadata.json");

const getCountries = () => {
  var country_1 = metadata[Math.floor(Math.random() * metadata.length)];
  var country_2 = metadata[Math.floor(Math.random() * metadata.length)];
  if (country_1.name === country_2.name) return getCountries();
  return { country_1: { name: country_1.name, population: country_1.population }, country_2: { name: country_2.name, population: country_2.population } };
};

const game = async (req, res) => {
  return await res.status(200).json(getCountries());
};

module.exports = { game };
