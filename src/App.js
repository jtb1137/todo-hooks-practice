import React, { Component } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
