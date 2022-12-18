import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import WebLayout from '~/components/layouts/WebLayout';
import Product from '~/components/product/Product';

function UpgradePage() {
  return (
    <>
      <WebLayout>
        <Container className="home" sx={{ minHeight: 'calc(100vh - 80px)', backgroundColor: '#f2f3f7' }} maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: '16px', fontWeight: '700', textAlign: 'center', py: 3 }}>
            GÓI DỊCH VỤ
          </Typography>
          <Grid spacing={2} container px="120px">
            <Grid item md={3}>
              <Product />
            </Grid>
            <Grid item md={3}>
              <Product />
            </Grid>
            <Grid item md={3}>
              <Product />
            </Grid>
            <Grid item md={3}>
              <Product />
            </Grid>
          </Grid>
        </Container>
      </WebLayout>
    </>
  );
}

export default UpgradePage;
