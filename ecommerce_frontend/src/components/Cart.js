import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom sx={{ mt: 4 }}>
        Carrito de Compras
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No hay productos en el carrito.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {cart.map(item => (
            <Grid item xs={12} key={item.id}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">{item.name}</Typography>
                <Box display="flex" alignItems="center">
                  <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <Typography variant="body1" sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                </Box>
                <Typography variant="body1">${item.price}</Typography>
                <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              Total: ${total.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              sx={{ mt: 2 }}
            >
              Realizar Pago
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
