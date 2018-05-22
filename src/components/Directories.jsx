import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import './styles/Directories.css';
import {Motion, spring} from 'react-motion';

export default class Directories extends Component {
  render() {
    return (
      <div className="Directories-container">
        <img className="Directories-img1 Directories-images" src={require("../images/Directory1/graduation.jpg")} alt=""/>
        <img className="Directories-img2 Directories-images" src={require("../images/Directory1/home-rental.jpg")} alt=""/>
      </div>
    )
  }
}
