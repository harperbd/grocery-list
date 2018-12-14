import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery'
import GroceryForm from './GroceryForm';

class App extends Component {
  state = {
    groceries: [
      { id: 1, name: 'Salad', price: "1.00", complete: true },
      { id: 2, name: 'Apples', price: "0.50", complete: false },
      { id: 3, name: 'Chicken', price: "2.50", complete: false }
    ]
  };

  addGroceryItem = (word, price) => {
    const { groceries } = this.state;
    const grocery = {id: this.getUniqueId(), name: word, price: price, complete: false};
    this.setState({ groceries: [grocery, ...groceries] })
  };

  getUniqueId = () => {
    return Math.floor((Math.random() * 10000));
  };

  listItems = () => {
    const { groceries } = this.state;
    return groceries.map( grocery => {
      return <Grocery key={grocery.id} {...grocery} groceryClick={this.groceryClick} />
    })
  };

  groceryClick = (id) => {
    const { groceries } = this.state;

    this.setState({
      groceries: groceries.map(grocery => {
        if (grocery.id === id) {
          return {...grocery, complete: !grocery.complete }
        }
        return grocery;
      })
    });
  };

  render() {
    return (
        <div>
          <GroceryForm addGroceryItem={this.addGroceryItem}  />
          <ul>
            { this.listItems() }
          </ul>
        </div>
    );
  }
}

export default App;