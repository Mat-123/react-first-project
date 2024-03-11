import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img className="doggoImg" src={this.props.ImgSource} alt={this.props.altDesc} />
      </div>
    );
  }
}

export default ImageComponent;
