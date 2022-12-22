import { Container, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonApp from '~/components/buttonApp';
import WebLayout from '~/components/layouts/WebLayout';

function PaymentPage() {
  const { state } = useLocation();
  const [product] = useState(state);
  const navigate = useNavigate();
  return (
    <>
      <WebLayout>
        <Container maxWidth="xl">
          <Box sx={{ margin: '0 auto', maxWidth: '800px', boxShadow: 12, marginTop: '30px', padding: '20px' }}>
            <Typography variant="h4" color="primary.main">
              Đặt hàng
            </Typography>
            <Stack spacing={1} sx={{ boxShadow: 12, borderRadius: 1, padding: '10px', marginTop: '20px' }}>
              <Typography>
                {' '}
                <b>Tên gói:</b> {product?.name}
              </Typography>
              <Typography>
                <b>Mô tả gói:</b> {product?.description}
              </Typography>
              <Typography>
                <b>Giá gói:</b> {product?.price} USD
              </Typography>
              <Typography>
                <b>Phương thức thanh toán:</b> Paypal
              </Typography>
            </Stack>
            <Box sx={{ marginTop: '20px' }}>
              <ButtonApp handleClick={() => navigate('/payment/paypal', { state: product })} style={{ width: '100%' }}>
                Đặt hàng
              </ButtonApp>
            </Box>
          </Box>
        </Container>
      </WebLayout>
    </>
  );
}

export default PaymentPage;
