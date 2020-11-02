import React, { createContext, useReducer, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import productReducer from '../reducer/productReducer';

export const PromoCodeContext = createContext();

const PromoCodeContextProvider = (props) => {
  const [promoCodes, dispatch] = useReducer(productReducer, [], () => {
    const localData = localStorage.getItem('promoCodes');
    return localData ? JSON.parse(localData) : [];
  });
  const getData = () => {
    axios({
      method: 'get',
      url: 'https://jaynax.herokuapp.com/api/promo-code',
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'ALL_PROMO_CODE',
          payload: response.data,
        });
        localStorage.setItem('promoCodes', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(error.data.error);
      });
  };
  const addPromoCode = (
    promoCode,
    startDate,
    endDate,
    discountRate,
    useTime
  ) => {

    console.log('data', promoCode, startDate, endDate, discountRate, useTime);
    axios({
      method: 'post',
      url: 'https://jaynax.herokuapp.com/api/promo-code',
      data: {
        promoCode,
        startDate,
        endDate,
        discountRate,
        useTime,
        status: true,
      },
    })
      .then((response) => {
        console.log('response', response);
        dispatch({
          type: 'ADD_PROMO_CODE',
          payload: {
            promoCode,
            startDate,
            endDate,
            discountRate,
            useTime,
            status: true,
          },
        });
        if (response.data.error) {
          Swal.fire(response.data.error);
        } else if (response.data === 'duplicate data found') {
          Swal.fire('"duplicate data found"');
        } else {
          Swal.fire('Successfully Added');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeactivate = (item) => {
    const { promoCode, startDate, endDate, discountRate, useTime } = item;
    const newPromos = promoCodes.filter(
      (res) => res.promoCode !== item.promoCode
    );
    item.status = false;

    axios({
      method: 'put',
      url: 'https://jaynax.herokuapp.com/api/promo-code',
      data: {
        promoCode,
        startDate,
        endDate,
        discountRate,
        useTime,
        status: false,
      },
    })
      .then((response) => {
        dispatch({
          type: 'REMOVE_PROMO_CODE',
          payload: { other: newPromos, edited: item },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleActivated = (item) => {
    const { promoCode, startDate, endDate, discountRate, useTime } = item;
    const newPromos = promoCodes.filter(
      (res) => res.promoCode !== item.promoCode
    );
    item.status = true;
    axios({
      method: 'put',
      url: 'https://jaynax.herokuapp.com/api/promo-code',
      data: {
        promoCode,
        startDate,
        endDate,
        discountRate,
        useTime,
        status: true,
      },
    })
      .then((response) => {
        dispatch({
          type: 'REMOVE_PROMO_CODE',
          payload: { other: newPromos, edited: item },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dataLoad = (loading) => {
    return loading;
  };

  useEffect(() => {
    getData();
    console.log('second', dataLoad);
  }, [dataLoad, addPromoCode]);

  return (
    <PromoCodeContext.Provider
      value={{ promoCodes, addPromoCode, handleDeactivate,handleActivated, dataLoad }}
    >
      {props.children}
    </PromoCodeContext.Provider>
  );
};

export default PromoCodeContextProvider;
