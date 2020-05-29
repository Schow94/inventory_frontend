import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import * as actions from './actions';
import { fetchInventory } from './actions';
import InventoryList from './InventoryList';
import AddItemForm from './AddItemForm';

class InventoryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
    };
  }

  // getInventory = async () => {
  //   let res = await axios.get('http://localhost:5000/items/');
  //   this.setState({
  //     inventory: [...res.data],
  //   });
  // };

  addItem = async (name, description, quantity) => {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:5000/items/',
      data: {
        name: name,
        description: description,
        quantity: quantity,
      },
    });
    this.getInventory();
  };

  deleteItem = async (itemId) => {
    let res = await axios({
      method: 'delete',
      url: `http://localhost:5000/items/${itemId}`,
    });
    this.getInventory();
  };

  editItem = async (itemId, name, description, quantity) => {
    let res = await axios({
      method: 'patch',
      url: `http://localhost:5000/items/${itemId}`,
      data: {
        name: name,
        description: description,
        quantity: quantity,
      },
    });
    this.props.fetchInventory();
  };

  componentDidMount() {
    this.props.fetchInventory();
  }

  render() {
    return (
      <>
        <h1>Inventory</h1>
        <AddItemForm addItem={this.addItem} />
        <InventoryList
          // Inventory coming from Redux now
          items={this.props.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </>
    );
  }
}

const mapStateToProps = ({ items }) => {
  return { items };
};

export default connect(mapStateToProps, { fetchInventory })(InventoryApp);
