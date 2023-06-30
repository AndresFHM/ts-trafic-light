
import  { useState } from "react";


const trafficColors = [
  {
    top: "red",
    middle: "black",
    bottom: "black"
  },
  {
    top: "black",
    middle: "black",
    bottom: "green"
  },
  {
    top: "black",
    middle: "yellow",
    bottom: "black"
  },
  
]

export const FunctionalTrafficLight = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const currentColor = trafficColors[slideIndex]
  
  const nextState = () => {
    setSlideIndex((slideIndex) => (slideIndex + 1) % trafficColors.length);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${currentColor.top}`}></div>
        <div className={`circle ${currentColor.middle}`}></div>
        <div className={`circle ${currentColor.bottom}`}></div>
      </div>
      <button 
        className="next-state-button" 
        onClick={nextState}
        >
        Next State
      </button>
    </div>
  );
};

