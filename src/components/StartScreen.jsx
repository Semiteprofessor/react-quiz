const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start-screen">
      <h2>Welcome to React Vite Quiz</h2>
      <h1>{numQuestions} questions to test your React mastery</h1>
      <button className="start-btn" onClick={() => dispatch({ type: "start" })}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
