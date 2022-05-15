const metadata = require("../utils/metadata.json");

const game = async (req, res) => {
  var country_1 = metadata[Math.floor(Math.random() * metadata.length)];
  var country_2 = metadata[Math.floor(Math.random() * metadata.length)];
  await res.status(200).json({ country_1: { name: country_1.name, population: country_1.population }, country_2: { name: country_2.name, population: country_2.population } });
};

module.exports = { game };
