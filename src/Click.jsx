import React, { useState } from "react";

const Click = () => {
  const state = useState();

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <div className="click">
        <h1> {count} </h1>
        <br />
        <button onClick={IncNum}>Click Me</button>
      </div>
    </React.Fragment>
  );
};

export default Click;
