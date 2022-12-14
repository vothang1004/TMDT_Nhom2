import React, { useState } from 'react';
import './header.scss';
import { Avatar, Box, Container, Divider, Grid, MenuItem, Stack } from '@mui/material';
import stringAvatar from '~/utils/stringAvatar';
import MenuAnchor from '~/components/menu/MenuAnchor';

function HeaderAdmin() {
  const [anchorUser, setAnchorUser] = useState();
  const openMenu = !!anchorUser;
  const handleCloseMenu = () => {
    setAnchorUser(null);
  };

  return (
    <Box
      component="header"
      height={80}
      sx={{
        borderBottom: '1px solid #ccc',
        backgroundColor: '#fff',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100vw',
        height: '80px',
      }}
    >
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
            <Stack height="100%" alignItems="center" justifyContent="flex-end" spacing={3} direction="row">
              <Stack alignItems="center">
                <Avatar
                  onClick={(e) => setAnchorUser(e.currentTarget)}
                  style={{ fontSize: '14px', cursor: 'pointer' }}
                  {...stringAvatar('Vo Minh Thang')}
                />
                <MenuAnchor anchorEl={anchorUser} open={openMenu} handleClose={handleCloseMenu}>
                  <MenuItem sx={{ fontSize: '14px' }} onClick={handleCloseMenu}>
                    Võ Minh Thắng
                  </MenuItem>
                  <MenuItem sx={{ fontSize: '14px' }} onClick={handleCloseMenu}>
                    Tài khoản
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem sx={{ fontSize: '14px' }} onClick={handleCloseMenu}>
                    Đăng xuất
                  </MenuItem>
                </MenuAnchor>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderAdmin;
