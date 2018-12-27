import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(
  //   () => {
  //     document.title = `You clicked ${count} times.`;
  //   },
  //   [count]
  // );

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item] = data.results;
    setPerson(item);
    setLoading(false);
  }, "");

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {loading ? <div>...loading</div> : <div>{person.name.first}</div>}
    </div>
  );
};
