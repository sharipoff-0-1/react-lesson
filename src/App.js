import React, { Component } from "react";
import Navbar from "./Components/Navbar.jsx";
import Body from "./Components/Body.jsx";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
