import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WebLayout from '~/components/layouts/WebLayout';
import Product from '~/components/product/Product';
import { getAllProduct } from '~/redux/actions/productAction';

function UpgradePage() {
  const { list: products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProduct(dispatch);
  }, [dispatch]);
  return (
    <>
      <WebLayout>
        <Container className="home" sx={{ minHeight: 'calc(100vh - 80px)', backgroundColor: '#f2f3f7' }} maxWidth="xl">
          <Typography variant="h1" sx={{ fontSize: '16px', fontWeight: '700', textAlign: 'center', py: 3 }}>
            GÓI DỊCH VỤ
          </Typography>
          <Grid spacing={2} container px="120px">
            {products &&
              products.length &&
              products.map((product) => (
                <Grid key={product.id} item md={3}>
                  <Product product={product} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </WebLayout>
    </>
  );
}

export default UpgradePage;
