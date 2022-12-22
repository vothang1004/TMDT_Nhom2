import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from './components/header/Header';
import CartImg from '~/assets/img/cart.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WebLayout({ children }) {
  const { list } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      {/* gio hang */}
      <Box
        sx={{
          width: '100px',
          height: '100px',
          position: 'fixed',
          zIndex: '100',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => navigate('/cart')}
      >
        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={CartImg} alt="" />
        {list && !!list.length && (
          <Typography
            sx={{
              position: 'absolute',
              top: '0',
              left: 0,
              bgcolor: 'primary.main',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              color: '#fff',
              fontSize: '12px',
              fontWeight: '600',
            }}
            variant="body1"
          >
            {list.length}
          </Typography>
        )}
      </Box>
      <div className="content">{children}</div>
    </>
  );
}

export default WebLayout;
