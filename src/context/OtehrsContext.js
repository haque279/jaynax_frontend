import React, { createContext, useReducer, useEffect } from 'react';
import othersReducer from '../reducer/otehrsReducer';

export const OthersCotext = createContext();
const OhtetsContextProvider = (props) => {
  const [others, dispatch] = useReducer(othersReducer, { subtotal: 0 }, () => {
    const localData = localStorage.getItem('others');
    return localData ? JSON.parse(localData) : { subtotal: 0 };
  });
  const addToSubtotal = (price) => {
    console.log('context api old ', others);
    dispatch({
      type: 'ADD_TO_SUBTOTAL',
      payload: price + others.subtotal,
    });
    console.log('context api price +', others.subtotal);
  };
  const subToSubtotal = (price) => {
    dispatch({
      type: 'SUB_TO_SUBTOTAL',
      payload: others.subtotal - price,
    });
    console.log('context api price -', price);
  };
  const removeSubtitle = () => {
    dispatch({
      type: 'REMOVE_SUBTOTAL',
      payload: 0,
    });
  }
  useEffect(() => {
    localStorage.setItem('others', JSON.stringify(others));
  }, [others, addToSubtotal, subToSubtotal]);
  return (
    <OthersCotext.Provider value={{ others, addToSubtotal, subToSubtotal, removeSubtitle }}>
      {props.children}
    </OthersCotext.Provider>
  );
};

export default OhtetsContextProvider;
