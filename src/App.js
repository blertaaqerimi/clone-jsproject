import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cart-page';
import ProductPage from './pages/pdp';
import AllProducts from './pages/all-products'
import Header from './components/header';
import { useEffect, useState } from 'react';
import { fetchCart } from './helpers/cart';


const App = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    fetchCart().then(response => {
      setCart(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header lineItems={cart?.lineItems || []} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path='/product/:handle' element={<ProductPage />} />
        <Route path='/all-products' element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
