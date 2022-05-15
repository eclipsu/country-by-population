// You lost

// Game result — 0

// Best result —

import React from "react";
import Button from "./Button";
import "../Styles/LoosingScreen.css";
import "../Styles/Button.css";

const LoosingScreen = (props) => {
  return (
    <div className="loosing-screen">
      <div className="loosing-screen-content">
        <h1>You lost 🙁</h1>
        <span className="scoreboard">
          <p>Score - {props.score}</p>
          <p>High Score - {props.heighscore}</p>
          <div className="restart-button control-buttons">
            <Button
              name="Restart"
              func={() => {
                props.reset();
              }}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default LoosingScreen;
