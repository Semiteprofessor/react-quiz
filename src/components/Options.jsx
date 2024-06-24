const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctAnswer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
