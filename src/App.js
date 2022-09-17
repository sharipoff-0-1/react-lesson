import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {
    // const plus = () => {
    //   this.setState({ num: this.state.num + 1 });
    // };

    // const minus = () => {
    //   if (this.state.num > 0) {
    //     this.setState({ num: this.state.num - 1 });
    //   }
    // };

    const getEmail = (e) => {
      this.setState({ title: e.target.value });
    };

    const getPassword = (e) => {
      this.setState({ pass: e.target.value });
    };

    return (
      <div className="container">
        <h2>Create an account</h2>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={getEmail} />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={getPassword} />
          <button className="btn">Create an account</button>
        </div>
        <p className="emailValue">User Email: {this.state.title}</p>
        <p className="passwordValue">User Password: {this.state.pass}</p>
      </div>
    );
  }
}

export default App;
