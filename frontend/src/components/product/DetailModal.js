import React from 'react';
import { Box, Modal, Stack, Typography } from '@mui/material';
import ButtonApp from '../buttonApp';
import { addToCart } from '~/redux/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxWidth: '900px',
  backgroundColor: '#fff',
  boxShadow: 24,
  p: 4,
};

function DetailModal({ open, handleClose, product }) {
  const { list: cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography variant="h6" color="primary.main">
              {product?.product_name}
            </Typography>
            <Typography variant="h6">Giá: {product?.price}$</Typography>
            <Typography sx={{ fontSize: '14px', fontStyle: 'italic' }} variant="body1">
              {product?.description}
            </Typography>
            <Stack spacing={1} direction="row">
              <ButtonApp handleClick={handleAddToCart} variant="outlined">
                {cart.length > 0 ? 'Xóa khỏi giỏ hàng' : 'Thêm vào giỏ'}
              </ButtonApp>
              <ButtonApp>Mua ngay</ButtonApp>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default DetailModal;
