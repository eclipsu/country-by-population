const isCorrect = (country1_population, country2_population, answer) => {
  if (answer === "low") return country2_population < country1_population;
  if (answer === "more") return country2_population > country1_population;
  return false;
};

module.exports = { isCorrect };
