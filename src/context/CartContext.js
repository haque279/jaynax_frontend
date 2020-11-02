import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import cartReducer from '../reducer/cartReducer';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });
  const addToCart = (data) => {
    console.log('data', data);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        title: data.title,
        price: data.price,
        size: data.size,
        color: data.color,
        quantity: 1,
      },
    });
  };

  const itemIncrement = (title, quantity) => {
    cart.forEach(function (obj) {
      if (obj.title === title) {
        obj.quantity = quantity + 1;
      }
    });
    console.log('newCart', cart);
    dispatch({
      type: 'INCREMENT',
      payload: cart,
    });
  };

  const itemDecrement = (title, quantity) => {
    cart.forEach(function (obj) {
      if (obj.title === title) {
        obj.quantity = quantity - 1;
      }
    });
    console.log('newCart', cart);
    dispatch({
      type: 'DECREMENT',
      payload: cart,
    });
  };
  const placeOrder = (subtotal) => {
    axios({
      method: 'post',
      url: 'https://jaynax.herokuapp.com/api/order',
      data: {
        orderNo: new Date().getTime(),
        itemPrice: subtotal,
        status: 0,
      },
    })
      .then((response) => {
        dispatch({
          type: 'PLACE_ORDER',
          payload: [],
        });
        Swal.fire('Order placed');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [addToCart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, itemIncrement, itemDecrement, placeOrder }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
