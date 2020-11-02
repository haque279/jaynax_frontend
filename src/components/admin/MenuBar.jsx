import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <aside class='menu'>
        <ul class='menu-list'>
          <li>
            <Link to='promo-code'>Promo Code</Link>
          </li>
          <li>
            <Link to='add-promo-code'>Add Promo Code</Link>
          </li>
          <li>
            <Link to='product-admin'>Product</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default MenuBar;
