import React, {Component} from 'react';

class GroceryForm extends Component {
  state = { word: '', price: ''};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    // alternative
    // this.setState({ word: e.target.value })
  };

  handleSubmit = (e) => {
    console.log('Form submitted');
    e.preventDefault();
    this.props.addGroceryItem(this.state.word, this.state.price);
    this.setState({ word: '', price: '' })
  };

  render() {
    const { word, price } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              name='word'
              value={word}
              required
              placeholder='Add Grocery Item'
              onChange={this.handleChange}
          />
          <input
              name='price'
              value={price}
              required
              placeholder='Add Price'
              onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default GroceryForm;