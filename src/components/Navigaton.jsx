import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from '../NavBar';
import AddPromoCode from './admin/AddPromoCode';
import ProductAdmin from './admin/ProductAdmin';
import PromoCode from './admin/PromoCode';
import Cart from './Cart';
import Home from './Home';
import NewProduct from './NewProduct';

const Navigaton = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/promo-code'>
          <PromoCode />
        </Route>
        <Route path='/add-promo-code'>
          <AddPromoCode />
        </Route>
        <Route path='/product-admin'>
          <ProductAdmin />
        </Route>

        <Route path='/new-product'>
          <NewProduct />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Navigaton;
