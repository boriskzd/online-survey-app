import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Survey App
          </Typography>
          <RouterLink to='/'>
            <Button variant='contained' color='info' sx={{ marginRight: 1 }}>
              Survey
            </Button>
          </RouterLink>
          <RouterLink to='/success'>
            <Button variant='contained' color='info'>
              Success
            </Button>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
