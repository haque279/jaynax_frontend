import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuBar from './MenuBar';

const ProductAdmin = () => {
  const [order, setOrder] = useState([]);
  const getData = () => {
    axios({
      method: 'get',
      url: 'https://jaynax.herokuapp.com/api/order',
    })
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    console.log(order);
  }, []);
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-quarters card'>
              <MenuBar />
            </div>
            <div className='column is-three-quarters'>
              <h3 className='title is-4'>Product</h3>
              <hr />
              <div className='columns'>
                <div className='column'>Order No</div>
                <div className='column'>Item Price</div>
                <div className='column'>Action</div>
              </div>
              {order.map((item) => (
                <div className='columns'>
                  <div className='column'>{item.orderNo}</div>
                  <div className='column'>{item.itemPrice}</div>
                  <div className='column'>
                    <button className='button is-small  is-primary mr-2'>
                      Confirm
                    </button>
                    <button className='button is-small  is-warning mr-2'>
                      Cancel
                    </button>
                    <button
                      className='button is-small is-outlined is-primary'
                      disabled
                    >
                      {item.status === 0
                        ? 'Pending'
                        : item.status === 2
                        ? 'Cancel'
                        : 'Confirm'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAdmin;
