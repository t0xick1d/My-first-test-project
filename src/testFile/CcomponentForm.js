import React, { Component } from "react";

export default class CcomponentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handelSubmit(event) {
    event.preventDefault();
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input value={this.state.input} onChange={this.handelChange} />
          <button type="submit">Submit</button>
        </form>

        <h5>Controlleed input:</h5>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
