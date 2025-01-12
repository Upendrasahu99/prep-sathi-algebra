import React, { useEffect } from 'react'

const CountDown = () => {
  const [seconds, setSeconds] = React.useState(60);

  useEffect(() => {
    // Create an interval to decrement the seconds
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 1) {
          return prevSeconds - 1; // Decrement the seconds
        } else {
          clearInterval(interval); // Clear interval when it reaches 0
          return 0; // Ensure seconds never go below 0
        }
      });
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);



  return (
    <div>
      <span className="countdown">
        <span style={{"--value": seconds}}></span>
      </span>
    </div>
  )
}

export default CountDown