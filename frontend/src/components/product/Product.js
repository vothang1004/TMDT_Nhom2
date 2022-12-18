import React from 'react';
import './Product.scss';
import { Stack, Typography } from '@mui/material';
import Vip1 from '~/assets/img/vip1.png';
import ButtonApp from '../buttonApp';

function Product() {
  return (
    <Stack
      sx={{
        width: '100%',
        padding: '10px 30px',
        backgroundColor: '#fff',
        filter: 'grayscale(100%)',
        transition: 'all linear 0.2s',
        '&:hover': {
          filter: 'unset',
          boxShadow: '0 0 10px 2px #ccc',
        },
      }}
      className="product"
      alignItems="center"
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          textAlign: 'center',
          color: 'rgb(205, 20, 23)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
        className="product-name"
        variant="h2"
      >
        Gói Vip
      </Typography>
      <img
        style={{
          width: 123,
          height: 90,
        }}
        src={Vip1}
        alt="vip1"
      />
      <Stack alignItems="center" spacing={1} marginTop="15px">
        <Typography sx={{ fontSize: '14px', textTransform: 'uppercase', color: 'primary.main' }} variant="h5">
          Chỉ từ <b>20.000Đ/Ngày</b>
        </Typography>
        <Typography sx={{ fontSize: '12px', textAlign: 'center' }} variant="body1">
          Dành cho quý khách có nhu cầu <b>TẢI FILE</b> với tốc độ cao
        </Typography>
        <ButtonApp style={{ borderRadius: 6, width: '100%' }} variant="outlined">
          Mua ngay
        </ButtonApp>
      </Stack>
      <Stack width="100%" mt={1} pl={2} component="ul" spacing={2}>
        <Typography sx={{ fontSize: '13px' }} component="li">
          Tốc độ <b>download</b> cao
        </Typography>
        <Typography sx={{ fontSize: '13px' }} component="li">
          Dung lượng lưu trữ: 300GB
        </Typography>
        <Typography sx={{ fontSize: '13px' }} component="li">
          Tiết kiệm thời gian
        </Typography>
      </Stack>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '13px',
          fontWeight: '700',
          fontStyle: 'italic',
          color: 'primary.main',
          marginTop: '12px',
        }}
        variant="subtitle1"
      >
        Xem chi tiết
      </Typography>
    </Stack>
  );
}

export default Product;
