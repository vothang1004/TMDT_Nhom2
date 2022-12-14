import React from 'react';
import { Box, Grid } from '@mui/material';
import AdminLayout from '~/components/layouts/AdminLayout';
import SidebarAdmin from '~/components/layouts/components/sidebar/SidebarAdmin';
import BarChartComponent from '~/components/chart/BarChartComponent';
import PieChartComponent from '~/components/chart/PieChartComponent';

const drawerWidth = 64;
const headerHieght = 80;

function HomePageAdmin() {
  return (
    <AdminLayout>
      <SidebarAdmin />
      <Box sx={{ marginLeft: `${drawerWidth}px`, marginTop: `${headerHieght}px` }}>
        <Grid container>
          <Grid sx={{height: '300px', paddingLeft: '30px'}} item md={6}>
            <BarChartComponent />
          </Grid>
          <Grid item md={6}>
            <Box sx={{width: '300px', margin: '0 auto'}}>
              <PieChartComponent />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}

export default HomePageAdmin;
