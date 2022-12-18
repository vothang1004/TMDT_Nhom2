import React from 'react';
import { Box, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AdminLayout from '~/components/layouts/AdminLayout';
import SidebarAdmin from '~/components/layouts/components/sidebar/SidebarAdmin';
import BarChartComponent from '~/components/chart/BarChartComponent';
import PieChartComponent from '~/components/chart/PieChartComponent';
import { Stack } from '@mui/system';

const drawerWidth = 64;
const headerHieght = 80;

function HomePageAdmin() {
  return (
    <AdminLayout>
      <SidebarAdmin />
      <Box sx={{ marginLeft: `${drawerWidth}px`, marginTop: `${headerHieght}px` }}>
        <Stack spacing={2}>
          <Grid container>
            <Grid sx={{ height: '300px', paddingLeft: '30px' }} item md={6}>
              <BarChartComponent />
            </Grid>
            <Grid item md={6}>
              <Box sx={{ width: '300px', margin: '0 auto' }}>
                <PieChartComponent />
              </Box>
            </Grid>
          </Grid>
          <Grid container padding="0 40px">
            <Grid item md={6}>
              <InputLabel sx={{ fontSize: '16px', fontWeight: 600 }}>Chọn khoảng thời gian</InputLabel>
              <Stack mt={2} direction="row" spacing={2}>
                <FormGroup sx={{ width: '50%' }}>
                  <FormLabel>Từ ngày</FormLabel>
                  <TextField type="date" />
                </FormGroup>
                <FormGroup sx={{ width: '50%' }}>
                  <FormLabel>Đến ngày</FormLabel>
                  <TextField type="date" />
                </FormGroup>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box mt={5} sx={{width: '100%', paddingLeft: '40px'}}>
                <InputLabel sx={{ fontSize: '16px', fontWeight: 600 }}>Chọn danh mục</InputLabel>
                <Select sx={{ width: '400px' }}>
                  <MenuItem value='item 1'>Item 1</MenuItem>
                  <MenuItem value='item 2'>Item 2</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </AdminLayout>
  );
}

export default HomePageAdmin;
