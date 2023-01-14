import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import Checkout from './Pages/Checkout';
import ItemDetailContainer from './Pages/ItemDetailContainer';
import ItemListContainer from './Pages/ItemListContainer';
import CartWidget from './Pages/CartWidget';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/shop/:id" element={<CartWidget/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
