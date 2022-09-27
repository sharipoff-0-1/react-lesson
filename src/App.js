import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faFloppyDisk,
  faHeartCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { data } from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      selected: {},
      title: "",
      like: false,
    };
  }
  render() {
    const onEdit = (id, title) => {
      this.setState({
        items: this.state.items.map((value) => ({
          id: value.id,
          title: value.title,
          hidden: value.id === id ? true : false,
        })),
      });
      this.setState({
        title: title,
      });
    };

    const onSave = (e) => {
      this.setState({ selected: {} });
    };

    const onChange = (e) => {
      this.setState({ title: e.target.value });
    };

    const onEnter = (e) => {
      const { value } = e.target;
      this.setState({ title: value });
    };

    const onAdd = (e) => {
      const newItem = {
        id: this.state.items.length + 1,
        title: this.state.title,
      };

      this.setState({
        items: [...this.state.items, newItem],
        title: "",
      });
    };

    const onDelete = (id) => {
      let result = this.state.items.filter((value) => value.id !== id);
      this.setState({ items: result });
    };

    const getLiked = (id) => {
      let selected = this.state.items.find((item) => item.id === id);
      selected = this.state.like;
      selected = !selected;
      this.setState({ like: selected });
    };

    return (
      <div className="container">
        <div className="heading">
          <h1>WebBrain Academy</h1>
          <div>
            <p>{this.state.items.length} posts</p>
            <p> 0 likes</p>
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="text"
            id="add"
            placeholder="Enter anything..."
            onChange={onEnter}
            value={this.state.title}
          />
          <button className="add-btn" onClick={onAdd}>
            Add
          </button>
        </div>
        <table>
          <tbody>
            {this.state.items.map((value) => (
              <tr key={value.id}>
                <th className="title">
                  {this.state.selected.id === value.id ? (
                    <input
                      onChange={(e) => onChange(e)}
                      className="edit"
                      value={this.state.title}
                      type="text"
                      name="name"
                    />
                  ) : (
                    value.title
                  )}
                </th>
                <th className="btns">
                  {this.state.selected.id === value.id ? (
                    <button onClick={() => onSave(value)}>
                      <FontAwesomeIcon icon={faFloppyDisk} />
                    </button>
                  ) : (
                    <button onClick={() => onEdit(value.id, value.title)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  )}
                  <button onClick={() => onDelete(value.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={(e) => getLiked(value.id)}>
                    {this.state.like === false ? (
                      <FontAwesomeIcon icon={faHeart} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartCircleBolt} />
                    )}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
