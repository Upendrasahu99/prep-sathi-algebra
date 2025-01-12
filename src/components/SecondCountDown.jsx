import React, { useEffect } from 'react'

const SecondCountDown = ({timeLimit, handleTimeEnd}) => {
  const [seconds, setSeconds] = React.useState(timeLimit);

  useEffect(() => {
    // Create an interval to decrement the seconds
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1; // Decrement the seconds
        } else {
          clearInterval(interval); // Clear interval when it reaches 0
          handleTimeEnd();
          return 0; // Ensure seconds never go below 0
        }
      });
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col p-2 bg-neutral text-neutral-content fixed top-0 right-0">
      <span className="countdown font-mono text-2xl">
        <span style={{"--value": seconds}}></span>
      </span>
      sec
    </div>
  )
}

export default SecondCountDown