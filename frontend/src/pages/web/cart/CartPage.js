import React from 'react';
import { useSelector } from 'react-redux';
import WebLayout from '~/components/layouts/WebLayout';
import CartEmpty from '~/assets/img/cart_empty.png';
import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
import Product from '~/components/product/Product';

function CartPage() {
  const { list: cart } = useSelector((state) => state.cart);
  return (
    <>
      <WebLayout>
        <Container>
          {cart.length === 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: `calc(100vh - 80px)` }}>
              <img src={CartEmpty} alt="" />
            </Box>
          ) : (
            <Grid spacing={2} sx={{ paddingTop: '50px' }} container>
              {cart.map((item) => (
                <Grid item md={3}>
                  <Product product={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </WebLayout>
    </>
  );
}

export default CartPage;
