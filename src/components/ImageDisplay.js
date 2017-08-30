import React, { Component } from "react";
import "../styles/App.css";


class ImageDisplay extends Component {
  render() {
  let pics =this.props.images
  let marsImages = pics.map((photo)=>{
    return (
        <ul>
          <li key ={photo.id}>
            <img src={photo.img_src}/>
          </li>
        </ul>
    )
  })
  return(
  <div>
    {marsImages}
  </div>
  )
}
}


export default ImageDisplay;

// this component should be a stateless functional component that receives the images, maps over them from props passed by the GetImageForm and displays them in a list fashion.
// render(){
//   let items = this.props.appetizers
//   // Since the items do not have a key, let's create one.
//   let key = 0;
//
//   let appetizers = items.map((items)=>{
//     // Increment the key so that each items has one.
//     key++;
//     return (
//       <tbody key={key}>
//          <tr>
//          //rendering from apertizer array
//            <td>{items.dish}</td>
//            <td>{items.description}</td>
//            <td>{items.price}</td>
//          </tr>
//       </tbody>
//     )
//   })
//   return (
// }
