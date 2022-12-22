import { Alert, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonApp from '~/components/buttonApp';
import WebLayout from '~/components/layouts/WebLayout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { BASE_URL } from '~/utils/constants';

const schema = yup.object({
  email: yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
});

function ForgetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const btnSubmitRef = useRef();
  const [message, setMessgage] = useState('');
  const handleSendPasswordReset = async (value) => {
    try {
      const resp = await axios.post(`${BASE_URL}/v1/auth/resetPassword`, value);
      if (resp && resp.status === 200) {
        setMessgage('Chúng tôi đã gửi mật khẩu mới vào email của bạn. Bạn vui lòng kiểm tra email');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // on submit
  const onSubmit = (value) => {
    handleSendPasswordReset(value);
  };
  return (
    <WebLayout>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Stack
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ boxShadow: 12, mt: 4, padding: '20px' }}
              spacing={2}
            >
              {message && <Alert security="success">{message}</Alert>}
              <TextField {...register('email')} fullWidth label="Email xác nhận" />
              {errors?.email && <FormHelperText error>{errors?.email?.message}</FormHelperText>}
              <Typography sx={{ fontSize: '14px', fontStyle: 'italic' }}>
                Hãy chắc chắn đây là email mà bạn đang sử dụng. Chúng tôi sẽ gửi lại mật khẩu mới vào email này
              </Typography>
              <ButtonApp
                style={isSubmitting ? { backgroundColor: '#ccc', pointerEvent: 'none' } : {}}
                handleClick={() => btnSubmitRef.current.click()}
              >
                Gửi mật khẩu
              </ButtonApp>
              <input hidden type="submit" ref={btnSubmitRef} />
            </Stack>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
    </WebLayout>
  );
}

export default ForgetPasswordPage;
