import React, { Component } from 'react';
import Item from './Item';

export default class InventoryList extends Component {
  render() {
    const { items, deleteItem, editItem } = this.props;
    const renderItems = items.map((item) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      );
    });

    return <div>{renderItems}</div>;
  }
}
