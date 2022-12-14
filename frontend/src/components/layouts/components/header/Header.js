import React from 'react';
import './header.scss';
import { Box, Container, Grid, Stack } from '@mui/material';
import ButtonApp from '~/components/buttonApp';

function Header() {
  return (
    <Box component="header" height={80} sx={{ borderBottom: '1px solid #ccc' }}>
      <Container sx={{ height: '100%' }} maxWidth="xl">
        <Grid height="100%" container>
          <Grid height="100%" item md={2}>
            <Box sx={{ width: 'auto', height: '100%', padding: '10px 10px 10px 0', boxSizing: 'border-box' }}>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src="https://storage.fshare.vn/images/logo-2.png"
                alt="logo"
              />
            </Box>
          </Grid>
          <Grid height="100%" item md={10}>
            <Stack spacing={3} height="100%" justifyContent="flex-end" alignItems="center" direction="row">
              <ButtonApp component="a" link="/recomend">
                Giới thiệu
              </ButtonApp>
              <ButtonApp component="a" link="/suport">
                Hỗ trợ
              </ButtonApp>
              <ButtonApp style={{ color: '#cd1417', fontWeight: '600' }} component="a" link="/event">
                Sự kiện
              </ButtonApp>
              <ButtonApp component="a" link="/upgrade">
                Nâng cấp
              </ButtonApp>
              <ButtonApp component="a" link="/invite">
                Mời bạn bè
              </ButtonApp>
              <ButtonApp component="a" link="/feture">
                Tính năng
              </ButtonApp>
              <ButtonApp component="a" link="/app">
                Ứng dụng
              </ButtonApp>
              <ButtonApp>Đăng ký</ButtonApp>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
