import React, { Component } from "react";
import data from "../data";
import homeIcon from "../assets/home-icon.svg";
import loupe from "../assets/loupe.svg";
import bath from "../assets/bath.svg";
import bed from "../assets/bed.svg";
import car from "../assets/car.svg";
import ruler from "../assets/ruler.svg";
import more from "../assets/more.svg";
import like from "../assets/like.svg";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      address: "",
      home: data,
    };
  }

  render() {
    const onSearch = (e) => {
      const { value } = e.target;
      const result = data.filter(
        ({ title, address }) =>
          title.toLowerCase().includes(value.toLowerCase()) ||
          address.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ home: result });
    };

    return (
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            onChange={onSearch}
          />
          <img className="icon" src={homeIcon} alt="" />
          <img className="search-icon" src={loupe} alt="" />
          <button className="search-btn">Search</button>
        </div>
        <div className="heading">
          <h1>Properties</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>

        <p className="search-result">
          <span className="bold">{this.state.home.length}</span>, results
        </p>
        <div className="products parent">
          {this.state.home.map((value) => {
            return (
              <div key={value.id} className="card">
                <div className="delete-btn">delete</div>
                <img src={value?.image} alt={value.title} />
                <div className="card-wrapper">
                  <div className="item-description">
                    <img
                      className="user-icon"
                      src={value?.specs.user}
                      alt="user-avatar"
                    />
                    <p className="item-title">{value.title}</p>
                    <p className="item-address">{value.address}</p>
                    <div className="item-specs">
                      <div className="spec-item">
                        <img src={bed} alt="bedroom-icon" />
                        <span>{value.specs.bed} Beds</span>
                      </div>
                      <div className="spec-item">
                        <img src={bath} alt="bath-icon" />
                        <span>{value.specs.bath} Baths</span>
                      </div>
                      <div className="spec-item">
                        <img src={car} alt="garage-icon" />
                        <span>{value.specs.garage} Garage</span>
                      </div>
                      <div className="spec-item">
                        <img src={ruler} alt="ruler-icon" />
                        <span>{value.specs.area}</span>
                      </div>
                    </div>
                  </div>
                  <div className="item-price">
                    <p>${value.price}/mo</p>
                    <div className="tool-bar">
                      <img src={more} alt="more-icon" />
                      <div className="like-btn">
                        <img src={like} alt="like-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
