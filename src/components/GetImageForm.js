import React, { Component } from 'react';
import "../styles/App.css";
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "guj1CzBtGU9Yi1mC3MxteUF8pAps02tg1Xyy2Sww";


class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }


render() {
  return (
    <div>
      <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover" value={this.state.value}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="rover" value={this.state.value}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
    </div>
  )
}
}
export default GetImageForm;
