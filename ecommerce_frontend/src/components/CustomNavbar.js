import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomNavbar = ({ categories }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (categoryId) => {
    handleMenuClose();
    navigate(`/category/${categoryId}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            InnovaTec
          </Link>
        </Typography>
        <Button
          color="inherit"
          onClick={handleMenuOpen}
        >
          Categorías
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </MenuItem>
          ))}
        </Menu>
        <TextField
          variant="outlined"
          placeholder="Buscar"
          size="small"
          sx={{ backgroundColor: 'white', borderRadius: 1, marginRight: 2 }}
        />
        <Button color="inherit">Buscar</Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
