import React, { useEffect, useState } from "react";
import moment from "moment";

export function TimerTest() {
  const [limit, setCount] = useState(3*60*1000);
  const [lastTime, setTime] = useState(moment());
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    console.log(`timerId: ${timerId}`);
  }, []);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(moment());
    }, 1000);
    console.log(`timerId: ${timerId}`);
  }, []);
  return (
    <div className="root">
      <h3 className="title">Timer:</h3>
      <h4>{limit}</h4>
      <h3 className="title">Latest Time:</h3>
      <h4>{lastTime.format()}</h4>
    </div>
  );
}