import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigaton from './components/Navigaton';
import CartContextProvider from './context/CartContext';
import OhtetsContextProvider from './context/OtehrsContext';
import ProductContextProvider from './context/ProductContext';
import PromoCodeContextProvider from './context/PromoCodeContext';

function App() {
  return (
    <Router>
      <ProductContextProvider>
        <CartContextProvider>
          <OhtetsContextProvider>
            <PromoCodeContextProvider>
                <Navigaton />
            </PromoCodeContextProvider>
          </OhtetsContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </Router>
  );
}

export default App;
