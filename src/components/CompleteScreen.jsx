import React from "react";

const CompleteScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        {Math.ceil(percentage)}%
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <div className="button">
        <div></div>
        <button
          className="next-btn"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default CompleteScreen;
