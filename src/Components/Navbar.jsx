import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../index.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <button className="btn">Login</button>
          </nav>
        </div>
      </header>
    );
  }
}
