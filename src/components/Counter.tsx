import React, { useState } from "react";

function initializeCounter() {
  for (let i = 0; i < 20000; i++) {
    console.log(i);
  }
  return 0;
}

const Counter = () => {
  const [count, setCount] = useState(() => initializeCounter());
  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
