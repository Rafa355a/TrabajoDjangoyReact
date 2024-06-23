import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const CategoryProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/categories/${id}/products/`)
      .then(response => {
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          setProducts([]);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setProducts([]);
      });
  }, [id]);

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Productos Disponibles de la Categoria
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                  <Typography variant="h6">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    In Stock: {product.stock}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryProducts;
