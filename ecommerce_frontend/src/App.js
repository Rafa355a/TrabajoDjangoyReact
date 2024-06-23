// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CategoryProducts from './components/CategoryProducts';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  return (
    <CartProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CustomNavbar categories={categories} />
          <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
            <Routes>
              <Route 
                exact path="/" 
                element={
                  <>
                    <ImageCarousel /> {/* Solo en la página principal */}
                    <ProductList />
                  </>
                } 
              />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/category/:id" element={<CategoryProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Container>
          <Footer />
          <WhatsAppButton /> {/* Añade el botón de WhatsApp aquí */}
        </Box>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;
