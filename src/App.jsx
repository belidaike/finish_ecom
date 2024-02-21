import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homeSection/home';
import { ShopContextProvider } from './context/shop-context';
import Cart from './pages/cart/cart';
import Navbar from './components/navbar';
import ProductDisplay from './pages/productDisplaySection/productDisplay';


export const AppContext = createContext()

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDisplay />} />
          </Routes>

        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App
