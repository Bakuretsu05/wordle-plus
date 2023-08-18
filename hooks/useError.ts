import { useState, useEffect } from "react";

//! displayTime is stacked up

export function useError(displayTime = 4000): [string, (text: string) => void] {
  const [error, setError] = useState("");

  const initiateError = (text: string) => {
    console.log("called error");
    setError(text);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => setError(""), displayTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayTime]);

  return [error, initiateError];
}
