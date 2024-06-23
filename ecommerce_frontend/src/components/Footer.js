import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>Servicio al Cliente</Typography>
          <ul>
            <li><Link href="#" color="inherit">Clientes</Link></li>
            <li><Link href="#" color="inherit">Contáctenos</Link></li>
            <li><Link href="#" color="inherit">Soporte Técnico</Link></li>
            <li><Link href="#" color="inherit">Garantía</Link></li>
            <li><Link href="#" color="inherit">Políticas de Garantía</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>Cómo Comprar</Typography>
          <ul>
            <li><Link href="#" color="inherit">Asesores Comerciales</Link></li>
            <li><Link href="#" color="inherit">Comprar por Web</Link></li>
            <li><Link href="#" color="inherit">Modalidades de Pago</Link></li>
            <li><Link href="#" color="inherit">Envíos</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>Nuestros Productos</Typography>
          <ul>
            <li><Link href="#" color="inherit">Productos</Link></li>
            <li><Link href="#" color="inherit">Marcas</Link></li>
            <li><Link href="#" color="inherit">Ofertas</Link></li>
            <li><Link href="#" color="inherit">Promociones</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>Redes Sociales</Typography>
          <ul>
            <li><Link href="#" color="inherit">Facebook</Link></li>
            <li><Link href="#" color="inherit">Instagram</Link></li>
            <li><Link href="#" color="inherit">Twitter</Link></li>
            <li><Link href="#" color="inherit">YouTube</Link></li>
          </ul>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 4, color: 'white' }}>
        © 2024 InnovaTec. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
