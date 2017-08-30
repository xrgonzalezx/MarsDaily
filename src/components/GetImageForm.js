import React, { Component } from 'react';
import "../styles/App.css";
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "guj1CzBtGU9Yi1mC3MxteUF8pAps02tg1Xyy2Sww";


class GetImageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }

  this.fetchRoverImage = this.fetchRoverImage.bind(this);
  this.handleRover = this.handleRover.bind(this);
  this.handleSol = this.handleSol.bind(this);
  this.handleCamera = this.handleCamera.bind(this);
}

componentDidMount(){
  this.fetchRoverImage();
}


fetchRoverImage(){
let cam = this.state.camera;
let rover = this.state.rover;
let num = this.state.sol;

//data stored in api key and fetched using var
  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

  fetch(imageUrl)
  .then((response) => response.json())
  .then((data) => {
    this.setState({images: data.photos})
  })
}

//handle events
 //the target.value is being stored in this.state in the this.state
handleRover(event){
    this.setState({
    rover:event.target.value
  })

}
handleCamera(event){
    this.setState({
    camera:event.target.value
  })
}

handleSol(event){
    this.setState({
    sol:event.target.value
  })

}

render() {
  return (
    <div>
      <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover">
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="camera">
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000 Make selection</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000"/>
      <GetImageButton handleClick={this.fetchRoverImage}/>
       <ImageDisplay images={this.state.images}/>
    </div>
  )
}
}
export default GetImageForm;


// class ParentComponent extends Component {
//   constructor(props){
//     super(props);
//
//     //we are really in a *bind* here.... :)
//     //fix it...
//
//     //state lives here
//     this.state = {
//       whatToSay: "",
//       whatWasSaid: "",
//     }
//
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//   }
//   handleInput(event) {
//     event.preventDefault();
//     //set the state on input change
//     //the target.value is being stored in whatToSay in the this.state
//     this.setState({whatToSay: event.target.value});
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     //check console to see if firing
//     console.log("fired");
//     //set the state for props and for value (prevents output from appearing when typing)
//     this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
//     //clear our input by resetting state
//     this.setState({whatToSay: ""});
//
//   }
//
// // Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
//
//   render() {
//     return (
//       <div>
//         <div>
//       {/*  //what is typed in the value will be displayed after the handleSubmit function*/}
//           <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
//         </div>
//         <div>
//           <ChildComponent onClick={this.handleSubmit}/>
//           <DisplayComponent sayWhat={this.state.whatWasSaid} />
//         </div>
//       </div>
//     );
//   }
// }
