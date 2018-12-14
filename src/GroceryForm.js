import React, {Component} from 'react';

class GroceryForm extends Component {
  state = { word: ''};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    // alternative
    // this.setState({ word: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.word);
    this.setState({ word: '' })
  };

  render() {
    const { word } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              name='word'
              value={word}
              required
              placeholder='Add Grocery Item'
              onChange={this.handleChange}
          />
        </form>
    )
  }
}

export default GroceryForm;