import React, {Component} from 'react';
import CurrencyInput from 'react-currency-input';

class GroceryForm extends Component {
  state = { word: '', price: '0.00'};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    // alternative
    // this.setState({ word: e.target.value })
  };

  handleSubmit = (e) => {
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
          <CurrencyInput name='price' value={price} placeholder='Add Price' required onChangeEvent={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default GroceryForm;