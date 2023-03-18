import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Loader from "react-loader-spinner"


function App(props) {
  return (
    <div>
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default App;

