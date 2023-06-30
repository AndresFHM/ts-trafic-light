
import { Component } from "react";

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


export class ClassTrafficLight extends Component{
  state = {
    slideIndex: 0
  };
  
  nextState = () => {
    this.setState((prevState: { slideIndex: number }) => ({
      slideIndex: (prevState.slideIndex + 1) % trafficColors.length
    }))
  };

  render() {

    const {slideIndex} = this.state;
    const currentColor = trafficColors[slideIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">

          <div className={`circle ${currentColor.top}`}></div>
          <div className={`circle ${currentColor.middle}`}></div>
          <div className={`circle ${currentColor.bottom}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={this.nextState}
        >Next State</button>
      </div>
    );
  }
}


