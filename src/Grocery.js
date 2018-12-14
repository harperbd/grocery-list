import React from 'react';
import CurrencyFormat from 'react-currency-format';

//todo: add price $$$
const Grocery = ({id, name, price, complete, groceryClick}) => {
  return (
      <li onClick={ () => groceryClick(id) }
          style={ complete ? {...styles.grocery, ...styles.complete} : styles.grocery }>
        {name}
        &nbsp;&ndash;&nbsp;
        <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </li>
  )
};

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'}
};

export default Grocery;