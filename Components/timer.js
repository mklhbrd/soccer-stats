import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = `0${seconds % 60}`.slice(-2);

  function handleStart() {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setSeconds(0);
  }

  return (
    <div>
      <h1>{`${minutes}:${formattedSeconds}`}</h1>
      <Button onClick={handleStart} disabled={isActive}>
        Start
      </Button>
      <Button onClick={handleStop} disabled={!isActive}>
        Stop
      </Button>
    </div>
  );
}

export default Timer;
