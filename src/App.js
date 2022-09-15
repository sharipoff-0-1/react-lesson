import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  render() {
    const plus = () => {
      this.setState({ num: this.state.num + 1 });
    };

    const minus = () => {
      if (this.state.num > 0) {
        this.setState({ num: this.state.num - 1 });
      }
    };

    return (
      <div className="counter">
        <button className="btn" onClick={plus}>
          +
        </button>
        <p className="count">{this.state.num}</p>
        <button className="btn" onClick={minus}>
          -
        </button>
      </div>
    );
  }
}

export default App;
