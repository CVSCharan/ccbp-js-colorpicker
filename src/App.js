import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    color: "colorffffff",
  };

  click1 = () => {
    this.setState({ color: "colore0e0e0" });
  };
  click2 = () => {
    this.setState({ color: "color6fcf97" });
  };
  click3 = () => {
    this.setState({ color: "color56ccf2" });
  };
  click4 = () => {
    this.setState({ color: "colorbb6bd9" });
  };

  render() {
    const { color } = this.state;
    const setColor = `d-flex flex-column justify-content-center ${color}`;
    return (
      <div id="colorPickerContainer" className={setColor}>
        <h1 className="heading1">Color Picker</h1>
        <div className="card-container">
          <button
            className="button button-1"
            id="button1"
            onClick={this.click1}
          >
            #e0e0e0
          </button>
          <button
            className="button button-2"
            id="button2"
            onClick={this.click2}
          >
            #6fcf97
          </button>
          <button
            className="button button-3"
            id="button3"
            onClick={this.click3}
          >
            #56ccf2
          </button>
          <button
            className="button button-4"
            id="button4"
            onClick={this.click4}
          >
            #bb6bd9
          </button>
        </div>
        <div className="para-container">
          <p className="bg-para">
            Background Color :{" "}
            <span className="span1" id="selectedColorHexCode">
              {color.slice(5, color.length)}
            </span>
          </p>
        </div>
        <p className="para1">
          Try clicking on one of the colors above to change the background color
          of this page!
        </p>
      </div>
    );
  }
}

export default App;
