import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Directories from "./components/Directories";
import ImageLayout from "./components/ImageLayout";
import Appbar from "./components/Appbar";
import SelfPortrait from "./components/SelfPortrait";
import VideoPlay from "./components/VideoPlay";
import Videos from "./components/Videos";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      imageHeight: "",
      imgOffset: 0,
    };
  }

  passImageHeight = imageHeight => {
    this.setState({ imageHeight });
  };

  passOffsetTop = imgOffset => {
    this.setState({ imgOffset });
  };  

  render() {
    return (
      <div className="App">
        <Appbar imageHeight={this.state.imageHeight} imgOffset={this.state.imgOffset}/>
        <SelfPortrait setImageHeight={this.passImageHeight} setOffsetTop={this.passOffsetTop} />
        {/* Each Directory holds folder location */}
        <Directories />
        <Videos />
      </div>
    );
  }
}

export default App;
