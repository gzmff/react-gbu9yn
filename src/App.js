import React, { useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const timeRef = useRef();
  const time = useRef();
  useEffect(() => {
    timeRef.current = setInterval(() => {
      if (time.current && time.current > 0) {
        time.current -= 1;
      } else {
        if (time.current === 0) {
          clearInterval(timeRef.current);
        } else {
          time.current = 10;
        }
      }
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
