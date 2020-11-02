import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import productReducer from '../reducer/productReducer';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [product, dispatch] = useReducer(productReducer, [], () => {
    const localData = localStorage.getItem('product');
    return localData ? JSON.parse(localData) : [];
  });
  const getData = () => {
    axios({
      method: 'get',
      url: 'https://jaynax.herokuapp.com/api/product',
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem('product', JSON.stringify(response.data));
        dispatch({
          type: 'ALL_PRODUCT',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ product }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
