import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { OthersCotext } from '../context/OtehrsContext';
import CartItem from './CartItem';

function Cart() {
  const { cart, placeOrder } = useContext(CartContext);
  const { others, removeSubtitle } = useContext(OthersCotext);
  const [isCheck, setIscheck] = useState(false);
  const [shoppingCharge, setShoppingCharge] = useState(200);
  const handlePlaceOrder = () => {
    placeOrder(others.subtotal + shoppingCharge);
    removeSubtitle();
  };
  useEffect(() => {
    console.log(typeof others.subtotal);
    console.log(isCheck);
  }, [isCheck]);
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-three-quarter'>
            <div className='card'>
              <header className='card-header'>
                <p className='card-header-title'>Cart</p>
                <Link to='/' className='button is-small mt-2 is-info'>
                  Back to Shopping
                </Link>
                <a
                  href='#'
                  className='card-header-icon'
                  aria-label='more options'
                >
                  <span className='icon'>
                    <i className='fas fa-angle-down' aria-hidden='true'></i>
                  </span>
                </a>
              </header>
              <div className='card-content'>
                {cart.length > 0 ? (
                  <div>
                    {' '}
                    {cart.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))}
                    <label className='radio'>
                      <input
                        type='checkbox'
                        name='terms'
                        onChange={() => {
                          setIscheck(!isCheck);
                        }}
                      />
                      I agree to the Terms and Conditions, Privacy Policy &
                      Refund Policy.
                    </label>
                    <button
                      className='button is-primary is-pulled-right'
                      onClick={() => {
                        handlePlaceOrder();
                      }}
                      disabled={!isCheck}
                    >
                      Checkout
                    </button>
                  </div>
                ) : (
                  'no item added to the cart'
                )}
              </div>
            </div>
          </div>
          <div className='column is-one-quarter'>
            {cart.length > 0 ? (
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>Orcer Summary</p>
                  <a
                    href='#'
                    className='card-header-icon'
                    aria-label='more options'
                  >
                    <span className='icon'>
                      <i className='fas fa-angle-down' aria-hidden='true'></i>
                    </span>
                  </a>
                </header>
                <div className='card-content'>
                  <p>
                    Subtotal ( {cart.length} items ) : BDT. {others.subtotal}
                  </p>
                  <p>Discount: BDT. 0</p>
                  <p>Shippig charge: BDT. {shoppingCharge}</p>
                  <p>Wallet Debit: BDT. 0</p>
                  <hr />
                  <h5>
                    Total Payable: BDT. {others.subtotal + shoppingCharge}
                  </h5>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
