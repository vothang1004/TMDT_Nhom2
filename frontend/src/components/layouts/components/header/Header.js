import React, { useState } from 'react';
import './header.scss';
import { Avatar, Box, Container, Divider, Grid, InputBase, MenuItem, Stack } from '@mui/material';
import ButtonApp from '~/components/buttonApp';
import SearchIcon from '@mui/icons-material/Search';
import MenuAnchor from '~/components/menu/MenuAnchor';
import stringAvatar from '~/utils/stringAvatar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const token = '';
  const navigate = useNavigate();
  const [anchorUser, setAnchorUser] = useState();
  const openMenu = !!anchorUser;
  const handleCloseMenu = () => {
    setAnchorUser(null);
  };
  return (
    <Box component="header" height={80} sx={{ borderBottom: '1px solid #ccc' }}>
      <Container sx={{ height: '100%' }} maxWidth="xl">
        <Grid height="100%" container>
          <Grid height="100%" item md={2}>
            <Box sx={{ width: 'auto', height: '100%', padding: '10px 10px 10px 0', boxSizing: 'border-box' }}>
              <img
                onClick={() => navigate('/')}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                src="https://storage.fshare.vn/images/logo-2.png"
                alt="logo"
              />
            </Box>
          </Grid>
          {token ? (
            <Grid height="100%" item md={10}>
              <Stack height="100%" alignItems="center" justifyContent="space-between" spacing={3} direction="row">
                <div></div>
                <InputBase
                  sx={{ width: '400px', justifySelf: 'center', border: '1px solid #ccc', borderRadius: 1, padding: 1 }}
                  placeholder="Tìm kiếm file"
                  endAdornment={<SearchIcon sx={{ cursor: 'pointer', color: '#ccc' }} />}
                />
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
          ) : (
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
                <ButtonApp>Đăng nhập</ButtonApp>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
