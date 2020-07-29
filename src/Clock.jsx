import React, { useState } from "react";

const Clock = () => {
  let currTime = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(currTime);

  const UpdateTime = () => {
    currTime = new Date().toLocaleTimeString();
    setCtime(currTime);
  };

  return (
    <React.Fragment>
      <div className="click">
        <h1> {cTime} </h1>
        <br />
        <button onClick={UpdateTime}> click me</button>
      </div>
    </React.Fragment>
  );
};

export default Clock;
