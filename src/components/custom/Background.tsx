// Background.jsx
import React, { useMemo } from "react";
import "./background.css";

const generateRandomProperties = (index: number) => {
  // Randomize top and left positions
  const top = Math.random() * 100 + "%";
  const left = Math.random() * 100 + "%";

  // Randomize animation duration between 50s and 500s
  const duration = Math.random() * (500 - 50) + 50 + "s";

  // Randomize animation delay between -500s and 0s
  const delay = -Math.random() * 500 + "s";

  // Randomize transform origin
  const originX = (Math.random() * 50 - 25).toFixed(2) + "vw"; // Between -25vw and 25vw
  const originY = (Math.random() * 50 - 25).toFixed(2) + "vh"; // Between -25vh and 25vh
  const transformOrigin = `${originX} ${originY}`;

  // Randomize box-shadow blur radius between 1vmin and 2.5vmin
  const shadowBlur = Math.random() * (2.5 - 1) + 1 + "vmin";
  const direction = Math.random() < 0.5 ? "-" : "";
  const boxShadow = `${direction}10vmin 0 ${shadowBlur} currentColor`;

  // Set color based on even or odd index
  const color = index % 2 === 0 ? "#FFACAC" : "#583C87";

  return {
    top,
    left,
    animationDuration: duration,
    animationDelay: delay,
    transformOrigin,
    boxShadow,
    color,
  };
};

const Background = () => {
  const numSpans = 20; // Adjust the number of spans as needed

  // Use useMemo to generate spans only once
  const spans = useMemo(() => {
    return Array.from({ length: numSpans }, (_, i) => ({
      ...generateRandomProperties(i),
      key: i,
    }));
  }, [numSpans]);

  return (
    <div className="background">
      {spans.map((spanProps) => (
        <span
          key={spanProps.key}
          style={{
            top: spanProps.top,
            left: spanProps.left,
            animationDuration: spanProps.animationDuration,
            animationDelay: spanProps.animationDelay,
            transformOrigin: spanProps.transformOrigin,
            boxShadow: spanProps.boxShadow,
            color: spanProps.color,
          }}
        ></span>
      ))}
    </div>
  );
};

export default Background;
