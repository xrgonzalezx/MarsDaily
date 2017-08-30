import React, { Component } from "react";
import "../styles/App.css";


class GetImageButton extends Component {
  render() {
    return (
      <div>
  {/*// return a <button> and receive props. It should fire the fetchRoverImage function when clicked and return the images if there were any from that day.*/}
        <button onClick={this.props.handleClick}>Rover Image</button>
      </div>
    );
  }
}
export default GetImageButton;
