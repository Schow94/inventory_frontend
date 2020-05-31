import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEditIsOn: false,
      name: this.props.item.name,
      description: this.props.item.description,
      quantity: this.props.item.quantity,
    };
  }

  toggleEditForm = () => {
    this.setState({
      toggleEditIsOn: !this.state.toggleEditIsOn,
    });
  };

  handleDelete = () => {
    // e.preventDefault();
    this.props.deleteItem(this.props.item.id);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveChanges = () => {
    this.props.editItem(
      this.props.item.id,
      this.state.name,
      this.state.description,
      this.state.quantity
    );
    this.toggleEditForm();
  };

  render() {
    const { toggleEditIsOn, name, description, quantity } = this.state;
    return (
      <>
        <li className="item-container">
          {toggleEditIsOn ? (
            <form onSubmit={this.saveChanges}>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="name"
                name="name"
                value={name}
              ></input>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="description"
                name="description"
                value={description}
              ></input>
              <input
                onChange={this.handleChange}
                type="number"
                placeholder="quantity"
                name="quantity"
                value={quantity}
              ></input>

              <button type="submit">Save Changes</button>
            </form>
          ) : (
            <>
              <h4>Name: {name}</h4>
              <p>Description: {description}</p>
              <p>Quantity: {quantity}</p>
              <button onClick={this.toggleEditForm}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </>
          )}
        </li>
        <hr />
      </>
    );
  }
}
