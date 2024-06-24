import { useEffect, useReducer, useState } from "react";
import "./App.css";
import DateCounter from "./components/DateCounter";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  // "loading", "error", "ready", "active", "complete"
  status: "loading",
  index: 0,
  answer: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "newAnswer":
      return { ...state, answer: action.payload };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unknown: " + action.type);
  }
};
function App() {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <ErrorMessage />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
