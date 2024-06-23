// src/components/ProductDetail.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product!', error);
      });
  }, [id]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Producto añadido al carrito correctamente');
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <Container>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
            }}
            alt={product.name}
            src={product.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="div" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            In Stock: {product.stock}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2, mr: 2 }} onClick={handleAddToCart}>
            Añadir al carrito
          </Button>
          <Button variant="outlined" color="primary" onClick={handleViewCart}>
            Ver mi carrito
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
