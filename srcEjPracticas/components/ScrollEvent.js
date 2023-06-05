import React from "react";
import { useState, useEffect } from "react";

export const ScrollEvent = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const eventHandler = () => {
      setState(window.scrollY);
    };
    window.addEventListener("scroll", eventHandler);

    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};
