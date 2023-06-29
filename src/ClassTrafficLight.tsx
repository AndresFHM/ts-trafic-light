
import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor(props: ClassTrafficLightProps) {
    super(props);
    this.state = {
      firstColor: "red",
      secondColor: "black",
      thirdColor: "black",
    }
  }

  nextState = () => {
    const { firstColor, secondColor, thirdColor } = this.state;

    if (firstColor === "red") {
      this.setState({ firstColor: "black", secondColor: "yellow" })
    } else if (secondColor === "yellow") {
      this.setState({secondColor: "black", thirdColor: "green"})
    } else {
      this.setState({firstColor: "red", secondColor: "black", thirdColor: "black"})
    }
  }

  render() {
    const { firstColor, secondColor, thirdColor } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">

          <div className={`circle ${firstColor}`}></div>
          <div className={`circle ${secondColor}`}></div>
          <div className={`circle ${thirdColor}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={this.nextState}
        >Next State</button>
      </div>
    );
  }
}


