import React, { useContext, useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // Aquí podrías manejar la lógica del pago
    alert('Pago realizado con éxito!');
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Checkout
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          label="Número de tarjeta"
          fullWidth
          sx={{ mb: 2 }}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <TextField
          label="Fecha de expiración (MM/AA)"
          fullWidth
          sx={{ mb: 2 }}
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <TextField
          label="CVV"
          fullWidth
          sx={{ mb: 2 }}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <TextField
          label="Nombre del titular"
          fullWidth
          sx={{ mb: 2 }}
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
        <Typography variant="h5" sx={{ mb: 2 }}>Total a pagar: ${total.toFixed(2)}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            sx={{
              mb: 2,
              width: '100%',
              maxWidth: '380px',
              height: '55px'
            }}
          >
            Realizar Pago
          </Button>
          <Box sx={{ width: '100%', maxWidth: '380px' }}>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons
                style={{ layout: "vertical", height: 55 }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: total.toFixed(2),
                      },
                    }],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert("Pago realizado con éxito por " + details.payer.name.given_name);
                  });
                }}
              />
            </PayPalScriptProvider>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Checkout;
