import React, { useEffect, useState } from 'react';
import { Box, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AdminLayout from '~/components/layouts/AdminLayout';
import SidebarAdmin from '~/components/layouts/components/sidebar/SidebarAdmin';
import BarChartComponent from '~/components/chart/BarChartComponent';
import PieChartComponent from '~/components/chart/PieChartComponent';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ButtonApp from '~/components/buttonApp';
import axios from 'axios';
import { BASE_URL } from '~/utils/constants';

const drawerWidth = 64;
const headerHieght = 80;

function HomePageAdmin() {
  const { register, getValues } = useForm({});
  const { list: products } = useSelector((state) => state.product);
  const { currentUser } = useSelector((state) => state.auth.login);
  const [bills, setBills] = useState([]);
  const handleDoanhThu = async () => {
    const values = getValues();
    if (!values.start_date || !values.end_date || !values.idProduct) {
      return;
    } else {
      const resp = await axios.get(`${BASE_URL}/v1/doanhthu/${values.start_date}/${values.end_date}`, {
        headers: {
          token: currentUser.token,
        },
      });
      if (resp && resp.status === 200) {
        setBills(resp.data);
      }
    }
  };
  return (
    <AdminLayout>
      <SidebarAdmin />
      <Box sx={{ marginLeft: `${drawerWidth}px`, marginTop: `${headerHieght}px` }}>
        <Stack alignItems="center" spacing={2}>
          <Grid container>
            <Grid sx={{ height: '300px', paddingLeft: '30px' }} item md={6}>
              <BarChartComponent bills={bills} />
            </Grid>
            <Grid item md={6}>
              <Box sx={{ width: '300px', margin: '0 auto' }}>
                <PieChartComponent bills={bills} />
              </Box>
            </Grid>
          </Grid>
          <Grid container padding="0 40px">
            <Grid item md={6}>
              <InputLabel sx={{ fontSize: '16px', fontWeight: 600 }}>Chọn khoảng thời gian</InputLabel>
              <Stack mt={2} direction="row" spacing={2}>
                <FormGroup sx={{ width: '50%' }}>
                  <FormLabel>Từ ngày</FormLabel>
                  <TextField {...register('start_date')} type="date" />
                </FormGroup>
                <FormGroup sx={{ width: '50%' }}>
                  <FormLabel>Đến ngày</FormLabel>
                  <TextField {...register('end_date')} type="date" />
                </FormGroup>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box mt={5} sx={{ width: '100%', paddingLeft: '40px' }}>
                <InputLabel sx={{ fontSize: '16px', fontWeight: 600 }}>Chọn danh mục</InputLabel>
                <Select {...register('idProduct')} sx={{ width: '400px' }}>
                  {products &&
                    products.length > 0 &&
                    products.map((product) => (
                      <MenuItem key={product._id} value={product?._id}>
                        {product?.name}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </Grid>
          </Grid>
          <ButtonApp handleClick={handleDoanhThu} style={{ minWidth: '400px' }}>
            Xem
          </ButtonApp>
        </Stack>
      </Box>
    </AdminLayout>
  );
}

export default HomePageAdmin;
