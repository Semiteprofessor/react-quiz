const Progress = ({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress
        className="progress-bar"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="summary">
        <p>
          Question <strong>{index + 1}</strong> of {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> of {maxPossiblePoints} points
        </p>
      </div>
    </header>
  );
};

export default Progress;
