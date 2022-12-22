import React, { useEffect, useRef, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { CheckBox, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import ButtonApp from '~/components/buttonApp';
import GoogleImage from '~/assets/img/google.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import jwt_decode from 'jwt-decode';
import BgHome from '~/assets/img/bg_home.jpg';
import WebLayout from '~/components/layouts/WebLayout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '~/redux/actions/authAction';
import { useDispatch } from 'react-redux';

const schema = yup.object({
  email: yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const btnSubmitRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const responseGoogle = (response) => {
    console.log(jwt_decode(response.tokenId));
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  // submit form login
  const onSubmit = (value) => {
    login(value, dispatch, navigate);
  };

  useEffect(() => {});
  return (
    <>
      <WebLayout>
        <Grid container sx={{ backgroundImage: `url(${BgHome})` }}>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px 30px 30px 0',
                height: '100%',
              }}
            >
              {/* Đăng nhâp */}
              <Stack spacing={1} sx={{ width: '60%', padding: '24px', backgroundColor: '#fff', boxShadow: 12 }}>
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
                <Stack onSubmit={handleSubmit(onSubmit)} pt={1} spacing={2} component="form">
                  <TextField
                    {...register('email')}
                    sx={{ '& .MuiFormLabel-root': { fontSize: '14px' } }}
                    variant="standard"
                    label="Email"
                  />
                  {errors?.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText>}
                  <FormControl variant="standard">
                    <InputLabel sx={{ fontSize: '14px' }} htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      {...register('password')}
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
                  {errors?.password?.message && <FormHelperText error>{errors.password.message}</FormHelperText>}
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <FormControlLabel
                      sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px', color: 'rgb(68, 68, 68)' } }}
                      control={
                        <CheckBox
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
                  <ButtonApp handleClick={() => btnSubmitRef.current.click()}>Đăng nhập</ButtonApp>
                  <input ref={btnSubmitRef} type="submit" hidden />
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
          <Grid item md={3}></Grid>
        </Grid>
      </WebLayout>
    </>
  );
}

export default LoginPage;
