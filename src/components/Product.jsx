import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { CartContext } from '../context/CartContext';
import { OthersCotext } from '../context/OtehrsContext';
import { ProductContext } from '../context/ProductContext';

const Product = () => {
  const { product } = useContext(ProductContext);
  const { addToCart, cart } = useContext(CartContext);
  const { addToSubtotal, others } = useContext(OthersCotext);
  const handleClick = (item) => {
    const newCart = cart.find((obj) => obj.title === item.title);
    if (newCart) {
      return Swal.fire('Alreaddy added')
    }
    addToSubtotal(item.price);
    addToCart(item);
    Swal.fire('Added to cart')
  };
  useEffect(() => {
    console.log('cart', cart);
    console.log('others', others);
  }, [handleClick]);
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {product.map((item) => (
            <div className='column is-one-quarter'>
              <div className='card'>
                <div className='overflow'>
                  <button
                    className='button is-primary'
                    onClick={(e) => {
                      handleClick(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img
                      src='https://picsum.photos/200/300'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='subtitle is-6'>{item.title}</p>
                    </div>
                  </div>

                  <div className='content'>
                    <div className='columns'>
                      <div className='column is-one-half'>
                        <p className='subtitle is-5'>BDT {item.price}</p>
                      </div>
                      <div className='column is-one-half'>
                        <button className='button is-small is-light is-primary is-pulled-right '>
                          sale
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
