import React from "react";
import { PetDoggo } from "./button";

class FunctionButtonComponent extends React.Component {
  render() {
    return <button onClick={PetDoggo}>{this.props.TextButton || "Useless Button"}</button>;
  }
}

export default FunctionButtonComponent;
