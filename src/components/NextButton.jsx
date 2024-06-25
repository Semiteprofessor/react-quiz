const NextButton = ({ dispatch, answer, numQuestions, index }) => {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <div className="button">
        <div></div>
        <button
          className="next-btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="button">
        <div></div>
        <button
          className="next-btn"
          onClick={() => dispatch({ type: "finish" })}
        >
          Complete
        </button>
      </div>
    );
};

export default NextButton;
