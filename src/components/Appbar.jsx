import React, { Component } from "react";
import "./styles/Appbar.css";

export default class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      currentScrollHeight: 0
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight });
      }
    };
  }

  render() {
    // console.log(this.props.imageHeight);
    // console.log(window.scrollY + (this.props.imageHeight * .4));
    // console.log(this.state.currentScrollHeight);
    // console.log(window.scrollY);
    // var scrollPercentage = 100 * containeR.scrollTop / (containeR.scrollHeight-containeR.clientHeight);
    // let opacity = Math.min(this.state.currentScrollHeight/this.props.imageHeight, 1);

    
    let opacity = Math.min(this.props.imgOffset, 1);
    console.log(this.props.imgOffset);
    // console.log(opacity);
    return (
      <div className="Appbar-container" style={{ opacity: `${opacity}` }}>
        <span className="Appbar-owner">CoryBlase</span>
        <div className="Appbar-right">
          <a href="my-work" className="Appbar-link">
            My Work
          </a>
          <a href="contact-me" className="Appbar-link">
            Contact Me
          </a>
        </div>
      </div>
    );
  }
}
