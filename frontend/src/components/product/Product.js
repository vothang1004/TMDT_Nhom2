import React, { useState } from 'react';
import './Product.scss';
import { Stack, Typography } from '@mui/material';
import Vip1 from '~/assets/img/vip1.png';
import ButtonApp from '../buttonApp';
import DetailModal from '~/components/product/DetailModal';
import PaymentModal from './PaymentModal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const { currentUser } = useSelector((state) => state.auth.login);
  const navigate = useNavigate();

  const handleOpenDetailModal = () => {
    setOpenDetailModal(true);
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal(false);
  };
  const handleClosePaymentModal = () => {
    setOpenPaymentModal(false);
  };
  const handleOrder = () => {
    if (currentUser?.token) {
      navigate('/payment', { state: product });
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {openDetailModal && <DetailModal product={product} open={openDetailModal} handleClose={handleCloseDetailModal} />}
      {openPaymentModal && <PaymentModal open={openPaymentModal} handleClose={handleClosePaymentModal} />}
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
          {product?.name}
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
            {product?.price} VND
          </Typography>
          <Typography sx={{ fontSize: '12px', textAlign: 'center' }} variant="body1">
            D??nh cho qu?? kh??ch c?? nhu c???u <b>T???I FILE</b> v???i t???c ????? cao
          </Typography>
          <ButtonApp handleClick={handleOrder} style={{ borderRadius: 6, width: '100%' }} variant="outlined">
            Mua ngay
          </ButtonApp>
        </Stack>
        <Stack width="100%" mt={1} pl={2} component="ul" spacing={2}>
          <Typography sx={{ fontSize: '13px' }} component="li">
            T???c ????? <b>download</b> cao
          </Typography>
          <Typography sx={{ fontSize: '13px' }} component="li">
            Dung l?????ng l??u tr???: 300GB
          </Typography>
          <Typography sx={{ fontSize: '13px' }} component="li">
            Ti???t ki???m th???i gian
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
            cursor: 'pointer',
          }}
          variant="subtitle1"
          onClick={handleOpenDetailModal}
        >
          Xem chi ti???t
        </Typography>
      </Stack>
    </>
  );
}

export default Product;
