import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import logo from './assets/logo.png';
import { CartContext } from './context/CartContext';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img src={logo} />
          </Link>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link class='icon has-text-primary mr-2' to='cart'>
                  <i class='fas fa-shopping-cart fa-lg'></i>
                </Link>
                {cart.length}
                
                <Link to='promo-code' className='button is-dark  ml-3 is-small '>Admin Panel</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
