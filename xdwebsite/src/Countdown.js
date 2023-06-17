import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date here

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference > 0) {
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(
        (timeDifference / (1000 * 60 * 60 * 24)) % 30
      );
      const hours = Math.floor(
        (timeDifference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      return { months, days, hours, minutes, seconds };
    }

    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update countdown every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <p>Months: {timeRemaining.months}</p>
        <p>Days: {timeRemaining.days}</p>
        <p>Hours: {timeRemaining.hours}</p>
        <p>Minutes: {timeRemaining.minutes}</p>
        <p>Seconds: {timeRemaining.seconds}</p>
      </div>
    </div>
  );
}

export default Countdown;
