import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import * as actions from './actions';
import { fetchInventory, addItem, deleteItem, editItem } from './actions';
import InventoryList from './InventoryList';
import AddItemForm from './AddItemForm';

class InventoryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
    };
  }

  // editItem = async (itemId, name, description, quantity) => {
  //   let res = await axios({
  //     method: 'patch',
  //     url: `http://localhost:5000/items/${itemId}`,
  //     data: {
  //       name: name,
  //       description: description,
  //       quantity: quantity,
  //     },
  //   });
  //   this.props.fetchInventory();
  // };

  componentDidMount() {
    this.props.fetchInventory();
    // Items isn't being updated properly either in reducer or action creator
    console.log(this.props.items);
  }

  render() {
    return (
      <>
        <h1>Inventory</h1>
        <AddItemForm addItem={this.props.addItem} />
        <InventoryList
          // Inventory coming from Redux now
          items={this.props.items}
          deleteItem={this.props.deleteItem}
          editItem={this.props.editItem}
        />
      </>
    );
  }
}

// const mapStateToProps = ({ items }) => {
//   return { items };
// };

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, {
  fetchInventory,
  addItem,
  deleteItem,
  editItem,
})(InventoryApp);
