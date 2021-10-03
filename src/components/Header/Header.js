import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <MenuItem>
        <IconButton aria-label="show 2 new notifications" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartIcon style={{marginRight:'20px'}} />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
