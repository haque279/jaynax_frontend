import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { OthersCotext } from '../context/OtehrsContext';

function CartItem({ item }) {
  const { addToSubtotal, subToSubtotal } = useContext(OthersCotext);
  const { itemIncrement, itemDecrement } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(item.price);
  const increment = () => {
    itemIncrement(item.title, item.quantity);
    addToSubtotal(item.price);
  };
  const decremnt = () => {
    if (item.quantity > 1) {
      itemDecrement(item.title, item.quantity);
      subToSubtotal(item.price);
    }
  };
  useEffect(() => {
    setTotalPrice(item.quantity * item.price);
  }, [increment, decremnt]);
  return (
    <div className='content'>
      <div className='columns'>
        <div className='column'>{item.title}</div>
      </div>
      <div className='columns'>
        <div className='column'>
          Color: {item.color}
          <br />
          Size: {item.size}
          <br />
          Price: {item.price}
        </div>
        <div className='column'>
          Shopping Method:
          <br />
          Shopping Charge: BDT. 100
        </div>
        <div className='column'>
          quantity : <button onClick={increment}>+</button>
          <button>{item.quantity}</button>
          <button onClick={decremnt}>-</button>
          <br />
          <br />
          Total Price: {totalPrice}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
