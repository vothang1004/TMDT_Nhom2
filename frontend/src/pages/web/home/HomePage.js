import React, { useState } from 'react';
import './Home.scss';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import WebLayout from '~/components/layouts/WebLayout';
import BgHome from '~/assets/img/bg_home.jpg';
import ButtonApp from '~/components/buttonApp';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { GoogleLogin } from 'react-google-login';
import jwt_decode from 'jwt-decode';
import FacebookLogin from 'react-facebook-login';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleImage from '~/assets/img/google.png';
import HomePageLogined from './HomePageLogined';

function HomePage() {
  const [showPassword, setShowPassword] = useState(false);
  const token = '';

  const responseGoogle = (response) => {
    console.log(jwt_decode(response.tokenId));
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  if (token) {
    return <HomePageLogined />;
  }

  return (
    <>
      <WebLayout>
        <Container
          className="home"
          sx={{ minHeight: 'calc(100vh - 80px)', backgroundImage: `url(${BgHome})` }}
          maxWidth="xl"
        >
          <Grid container>
            <Grid item md={6}>
              <Stack spacing={2} padding={'40px 0'}>
                <Typography
                  sx={{ textAlign: 'center', color: '#fff', fontSize: '16.8px', fontStyle: 'italic', px: 3 }}
                  variant="subtitle1"
                >
                  Trao cho bạn cơ hội được lưu trữ, download, upload và chia sẻ dữ liệu trực tuyến đến bất cứ đâu, bất
                  cứ khi nào.
                </Typography>
                <Box sx={{ p: 3, backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: '10px' }}>
                  <Stack spacing={2}>
                    <Stack
                      alignItems="center"
                      sx={{
                        width: '100%',
                        padding: '20px 0 0 0',
                        border: 'dashed 2px #cd1417;',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                      }}
                    >
                      <img
                        style={{ width: 59, height: 49 }}
                        src="https://www.fshare.vn/images/page-home/section_1_icon.png"
                        alt=""
                      />
                      <Typography
                        sx={{ padding: '20px 0 10px 0', fontSize: '14px', fontWeight: 400, textAlign: 'center' }}
                        variant="body2"
                      >
                        Kéo thả tập tin/thư mục hoặc nhấn nút tải lên và chia sẻ bên dưới
                      </Typography>
                      <ButtonApp>TẢI LÊN VÀ CHIA SẺ</ButtonApp>
                      <Typography
                        sx={{ padding: '30px 0 10px 0', fontSize: '14px', fontWeight: 400, textAlign: 'center' }}
                        variant="body2"
                      >
                        Tối đa 10GB / 10 tập tin
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Checkbox
                        id="home-check"
                        defaultChecked
                        sx={{
                          color: '#cd1417',
                          '&.Mui-checked': {
                            color: '#cd1417',
                          },
                        }}
                      />
                      <Typography
                        htmlFor="home-check"
                        component="label"
                        sx={{ fontSize: '12px', fontWeight: '400', textAlign: 'left' }}
                      >
                        Nhấn nút <b>Tải lên và Chia sẻ</b> hoặc kéo thả tập tin là bạn đã đồng ý với các
                        <Link
                          style={{ fontSize: '12px', fontWeight: '600', textDecoration: 'none', color: '#000' }}
                          to="/privacy"
                        >
                          {' '}
                          Điều khoản và chính sách của Fshare
                        </Link>
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '30px 30px 30px 0',
                  height: '100%',
                }}
              >
                {/* Đăng nhâp */}
                <Stack spacing={1} sx={{ width: '60%', padding: '24px', backgroundColor: '#fff' }}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: '22px',
                      fontWeight: 400,
                      letterSpacing: '1px',
                      color: 'rgb(68,68,68)',
                    }}
                    variant="h5"
                  >
                    Đăng nhập
                  </Typography>
                  <Typography sx={{ textAlign: 'center', fontSize: '14px' }} variant="subtitle2">
                    với mạng xã hội của bạn
                  </Typography>
                  <Stack
                    sx={{ position: 'relative', paddingBottom: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.12);' }}
                    spacing={1}
                  >
                    <GoogleLogin
                      clientId="257874017469-m2maogal65g8qnuch8t9h54k6rt6ffuu.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#4285f4',
                            padding: 0,
                            borderRadius: '0 4px 4px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            '&:hover': {
                              opacity: '0.9',
                            },
                          }}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              backgroundColor: '#fff',
                              marginRight: 'auto',
                            }}
                          >
                            <img style={{ width: '20px', height: '20px' }} src={GoogleImage} alt="" />
                          </Box>
                          <span style={{ flexGrow: 1, fontSize: 12, fontWeight: 500 }}>ĐĂNG NHẬP VỚI GOOGLE</span>
                        </Button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                      appId="519822053435491"
                      autoLoad={true}
                      textButton="FACEBOOK"
                      fields="name,email,picture"
                      callback={responseFacebook}
                      cssClass="login-facebook-btn"
                      icon={<FacebookRoundedIcon fontSize="small" />}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        display: 'inline-block',
                        transform: 'translate(-50%, 50%)',
                        backgroundColor: '#fff',
                        padding: '5px 10px',
                        color: 'rgb(68,68,68)',
                      }}
                    >
                      hoặc
                    </span>
                  </Stack>
                  <Stack pt={1} spacing={2} component="form">
                    <TextField sx={{ '& .MuiFormLabel-root': { fontSize: '14px' } }} variant="standard" label="Email" />
                    <FormControl variant="standard">
                      <InputLabel sx={{ fontSize: '14px' }} htmlFor="standard-adornment-password">
                        Password
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label="toggle password visibility"
                            >
                              {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <FormControlLabel
                        sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', color: 'rgb(68, 68, 68)' } }}
                        control={
                          <Checkbox
                            sx={{
                              color: '#cd1417',
                              '&.Mui-checked': {
                                color: '#cd1417',
                              },
                            }}
                            size="small"
                          />
                        }
                        label="Ghi nhớ đăng nhập"
                      />
                      <Link to="/foget-password" style={{ fontSize: 12, color: '#57a9fd', textDecoration: 'none' }}>
                        Quên mật khẩu?
                      </Link>
                    </Stack>
                    <ButtonApp>Đăng nhập</ButtonApp>
                    <Typography sx={{ fontSize: '12px' }} component="span">
                      Bạn không có tài khoản ?{' '}
                      <Link to="/register" style={{ fontSize: 12, color: '#57a9fd', textDecoration: 'none' }}>
                        Đăng ký ngay
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </WebLayout>
    </>
  );
}

export default HomePage;
