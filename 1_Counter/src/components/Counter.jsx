import React from "react";
export const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <h1> {count} </h1>

      <div>
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};
