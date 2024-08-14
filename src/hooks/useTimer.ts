import { useEffect, useState } from "react";

export const useTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timer, setTimer] = useState("00:00");
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const reset = () => {
        setSeconds(0)
        setMinutes(0)
        setTimer("00:00")
    }

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(
        String(minutes).padStart(2, "0") +
          ":" +
          String(seconds).padStart(2, "0")
      );
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prevMinutes) => prevMinutes + 1);
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [minutes, seconds]);
  return {timer, intervalId, reset}
};
