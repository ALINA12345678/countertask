import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleRunning = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div className="container border text-center" style={{ marginTop: "200px" }}>
      <h1 className="text-warning fw-bolder">Counter Application</h1>
      <h1 className="fw-bolder">{counter}</h1>
      <div className="p-3">
        <Button variant="primary" onClick={toggleRunning} className="m-2">
          {isRunning ? "Pause" : "Continue"}
        </Button>
        <Button variant="warning" onClick={handleReset} className="m-2">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;
