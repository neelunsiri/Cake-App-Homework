import React from "react";
import "../../src";
const Cake = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <img src={props.image} />
    </div>
  );
};
export default Cake;



// function Cake(props){
//   return props
// }

