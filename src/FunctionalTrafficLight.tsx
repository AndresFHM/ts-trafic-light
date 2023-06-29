
import React, { useState } from "react";

interface FunctionalTrafficLightProps {}

export const FunctionalTrafficLight: React.FC<FunctionalTrafficLightProps> = ({}) => {
  const [firstColor, setFirstColor] = useState<"red" | "black">("red");
  const [secondColor, setSecondColor] = useState<"black" | "yellow">("black");
  const [thirdColor, setThirdColor] = useState<"black" | "green">("black");

  const nextState = () => {
    if (firstColor === "red") {
      setFirstColor("black");
      setSecondColor("yellow");
    } else if (secondColor === "yellow") {
      setSecondColor("black");
      setThirdColor("green");
    } else {
      setFirstColor("red");
      setSecondColor("black");
      setThirdColor("black");
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${firstColor}`}></div>
        <div className={`circle ${secondColor}`}></div>
        <div className={`circle ${thirdColor}`}></div>
      </div>
      <button className="next-state-button" onClick={nextState}>
        Next State
      </button>
    </div>
  );
};

