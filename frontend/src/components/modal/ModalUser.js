import { FormHelperText, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonApp from '../buttonApp';
import axios from 'axios';
import { BASE_URL } from '~/utils/constants';
import { updateUser } from '~/redux/reducers/authSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập username'),
  email: yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
});

function ModalUser({ open, handleClose }) {
  const { currentUser } = useSelector((state) => state.auth.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: currentUser?.user?.username,
      email: currentUser?.user?.email,
    },
    resolver: yupResolver(schema),
  });
  const btnSubmitRef = useRef();
  const dispatch = useDispatch();
  // on submit
  const onSubmit = (value) => {
    console.log(value);
    const handleUpdateUser = async () => {
      try {
        const resp = await axios.put(`${BASE_URL}/v1/user/${currentUser?.user?._id}`, value, {
          headers: {
            token: currentUser?.token,
          },
        });
        if (resp && resp.status === 200) {
          dispatch(updateUser(resp.data));
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleUpdateUser();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack onSubmit={handleSubmit(onSubmit)} spacing={2} component="form" sx={style}>
          <Typography sx={{ textAlign: 'center', color: 'primary.main', marginBottom: '24px' }} variant="h5">
            Thông tin của bạn
          </Typography>
          <TextField {...register('username')} fullWidth label="Username" />
          {errors?.username && <FormHelperText error>{errors?.username?.message}</FormHelperText>}
          <TextField disabled {...register('email')} fullWidth label="Email" />
          {errors?.email && <FormHelperText error>{errors?.email?.message}</FormHelperText>}
          <ButtonApp handleClick={() => btnSubmitRef.current.click()}>Lưu thay đổi</ButtonApp>
          <input type="submit" hidden ref={btnSubmitRef} />
          {/* <TextField
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            label="Password"
            InputProps={{
              endAdornment: showPassword ? (
                <RemoveRedEyeIcon onClick={() => setShowPassword(false)} sx={{ cursor: 'pointer' }} />
              ) : (
                <VisibilityOffIcon onClick={() => setShowPassword(true)} sx={{ cursor: 'pointer' }} />
              ),
            }}
          />
          {errors?.password && <FormHelperText error>{errors?.password?.message}</FormHelperText>} */}
        </Stack>
      </Modal>
    </>
  );
}

export default ModalUser;
