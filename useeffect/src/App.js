import "./styles.css";
import React, { Component } from "react";

class Input extends Component {
  state = {
    firstName: ""
  };

  displayNameHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ firstName: updatedName });
    //console.log(updatedName);
  };

  render() {
    return (
      <div>
        <form>
          <label>Enter the Name</label>
          <input
            type="text"
            name="firstName"
            onChange={this.displayNameHandler}
          />
          <button type="button" onSubmit={(e) => this.displayNameHandler(e)}>
            Submit
          </button>
          <p>"FirstName: " {this.state.firstName}</p>
        </form>
      </div>
    );
  }
}
export default Input;
