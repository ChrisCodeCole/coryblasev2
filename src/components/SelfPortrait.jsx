import React, { Component } from "react";

export default class SelfPortrait extends Component {
  constructor(props) {
    super(props);

  }

  onLoad = () => {
    const selfPortraitPic = document.querySelector(".SelfPortrait-img");
    const selfPortraitContainer = document.querySelector(".SelfPortrait-container");

    this.props.setImageHeight(
      selfPortraitPic.offsetHeight
    );
    this.props.setOffsetTop(
      selfPortraitPic.offsetTop
    );
  };

  render() {
    return (
      <div className="SelfPortrait-container">
        <img
          className="SelfPortrait-img"
          alt="intro-image"
          src={require("../images/Photographer.jpg")}
          onLoad={this.onLoad}
          style={{ maxWidth: "100%", height: "auto", width: "100vw" }}
        />
        <img
          alt="intro-image"
          src={require("../images/Photographer.jpg")}
          style={{ maxWidth: "100%", height: "auto", width: "100vw" }}
        />
      </div>
    );
  }
}
