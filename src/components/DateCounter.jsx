import React, { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };
const reducer = (state = initialState, action) => {
  console.log(state, action);

  // return { count: 0, step: 1 };

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, step: state.step + 1 };
    case "decrement":
      return { ...state, count: state.count - 1, step: state.step - 1 };
    case "setCount":
      return { ...state, count: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }

  //   action.type === "increment";
  //   if (action.type === "increment") return state + 1;
  //   if (action.type === "decrement") return state - 1;
  //   if (action.type === "setCount") return action.payload;
};

const DateCounter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("June 21 2025");
  date.setDate(date.getDate() + count);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleSetCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };
  const handleSetStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const handleReset = () => {
    dispatch({ type: "reset", payload: 0 });
    // setCount(0);
  };
  return (
    <div>
      <input type="range" name="" id="" value={step} />
      <div>
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={Math.abs(count)} />
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>{new Date().toLocaleDateString}</p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DateCounter;
