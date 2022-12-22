import { Box, Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WebLayout from '~/components/layouts/WebLayout';
import Product from '~/components/product/Product';
import { BASE_URL } from '~/utils/constants';

function OrderPage() {
  const { currentUser } = useSelector((state) => state.auth.login);
  const [orders, setOrders] = useState();
  const navigate = useNavigate();
  console.log('orders => ', orders);
  useEffect(() => {
    if (currentUser?.token) {
      const getOrders = async () => {
        try {
          const resp = await axios.get(`${BASE_URL}/v1/bills/${currentUser?.user?._id}`, {
            headers: {
              token: currentUser?.token,
            },
          });
          console.log('run here');
          if (resp && resp.status === 200) {
            setOrders(resp.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getOrders();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.token, currentUser?.user?.id]);
  return (
    <>
      <WebLayout>
        <Container maxWidth="xl">
          <Box mt={4}>
            <Grid container>
              {orders &&
                orders.length > 0 &&
                orders.map((order, index) => (
                  <Stack key={order._id} sx={{ width: '100%', boxShadow: 12, mb: 2, p: 2 }} spacing={2}>
                    <Typography variant='h6' color='primary.main'>Đơn hàng {index + 1}</Typography>
                    {order.details.map((detail) => (
                      <Stack sx={{p: 1, boxShadow: 12, borderRadius: 1}} key={detail._id} spacing={1}>
                        <Typography>Tên: {detail.name}</Typography>
                        <Typography>Giá: {detail.price} USD</Typography>
                      </Stack>
                    ))}
                    <Typography>Ngay mua: {order.day}/{order.month}/{order.year}</Typography>
                  </Stack>
                ))}
            </Grid>
          </Box>
        </Container>
      </WebLayout>
    </>
  );
}

export default OrderPage;
