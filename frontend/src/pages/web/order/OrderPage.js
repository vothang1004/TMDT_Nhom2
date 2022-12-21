import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import WebLayout from '~/components/layouts/WebLayout';
import Product from '~/components/product/Product';

function OrderPage() {
  return (
    <>
      <WebLayout>
        <Container maxWidth="xl">
          <Box mt={4}>
            <Grid container>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </WebLayout>
    </>
  );
}

export default OrderPage;
