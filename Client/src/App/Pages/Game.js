import React, { useEffect, useState } from "react";
import CountryImage from "../Components/CountryImage";
import Button from "../Components/Button";
import ScoreCounter from "../Components/ScoreCounter";

import axios from "axios";
import EndPoint from "../Utils/Api";
import { isCorrect } from "../Utils/Engine";

import LoosingScreen from "../Components/LoosingScreen";
import "../Styles/Game.css";
import "../Styles/Mobile.css";

const Game = (props) => {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [heighscore, setHeighScore] = useState(0);
  const [countries, setCountries] = useState({ country_1: { name: "blue", population: 200 }, country_2: { name: "red", population: 200 } });
  const [streak, setStreak] = useState(0);
  const [lost, setLost] = useState(false);

  const nextGame = () => {
    setTimeout(() => {
      setStreak(streak + 1);
      setAnswered(false);
    }, 1500);
  };

  const loose = () => {
    setTimeout(() => {
      setStreak(streak + 1);
      setLost(true);
    }, 1500);
  };

  const reset = () => {
    setLost(false);
    setScore(0);
    setAnswered(false);
  };

  const highScoreCounter = (currectScore) => {
    if (currectScore >= heighscore) setHeighScore(heighscore + 1);
  };

  const checkAnswer = (event) => {
    setAnswered(true);
    const isUserCorrect = isCorrect(countries.country_1.population, countries.country_2.population, event.target.id);
    if (!isUserCorrect) return loose();
    if (isUserCorrect) setScore(score + 1);
    highScoreCounter(score);
    return nextGame();
  };

  useEffect(() => {
    const call = () => {
      axios.get(`${EndPoint}/api/countries/game`).then((res) => {
        setCountries(res.data);
      });
    };
    call();
  }, [streak]);

  return (
    <div className="game-container">
      {lost ? (
        <LoosingScreen reset={reset} score={score} heighscore={heighscore} />
      ) : (
        <div className="image_container">
          <div className="vsblock blue-vsblock">
            <div className="vs-data">
              {console.log(countries)}
              <h1>{countries.country_1.name}</h1>
              <h4>{countries.country_1.population.toLocaleString()}</h4>
            </div>
            <CountryImage className="img" querry={countries.country_1.name} />
          </div>
          <div className="score-counter">
            <ScoreCounter score={score} />
          </div>
          <div className="vsblock red-vsblock">
            <div className="vs-data">
              <h1>{countries.country_2.name}</h1>
              {answered ? (
                countries.country_2.population.toLocaleString()
              ) : (
                <div className="vs-control-buttons control-buttons">
                  <Button id="low" name="Less" func={checkAnswer} />
                  <Button id="more" name="More" func={checkAnswer} />
                </div>
              )}
            </div>
            <CountryImage className="img" querry={countries.country_2.name} />
            <div className="red-overlay" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
