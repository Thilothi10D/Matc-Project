import { Outlet } from 'react-router-dom';
import MainDrawer from '../Dashboard/Drawer';
import Grid from '@mui/material/Grid';

const PageLayout = () => (
  <Grid>
    <Grid item md={4}>
      <MainDrawer />
    </Grid>    
    <Grid item md={8}>
      <Outlet />
    </Grid>     
  </Grid>
);