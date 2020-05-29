import React, { Component } from 'react';

export default class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      quantity: 0,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(
      this.state.name,
      this.state.description,
      this.state.quantity
    );

    this.setState({
      name: '',
      description: '',
      quantity: 0,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="description"
          name="description"
          value={this.state.description}
        ></input>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="quantity"
          name="quantity"
          value={this.state.quantity}
        ></input>

        <button type="submit">Add Item</button>
      </form>
    );
  }
}
