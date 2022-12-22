import { Container } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import WebLayout from '~/components/layouts/WebLayout';
import { BASE_URL } from '~/utils/constants';

function PaypalPage() {
  const { currentUser } = useSelector((state) => state.auth.login);
  const paypal = useRef();
  const { state: product } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: product?.name,
                amount: {
                  currency_code: 'USD',
                  value: product?.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          const handleOrder = async () => {
            try {
              const resp = await axios.post(
                `${BASE_URL}/v1/bills`,
                {
                  user: currentUser?.token,
                  price: product?.price,
                  details: [product?._id],
                  payment_status: true,
                },
                {
                  headers: {
                    token: currentUser?.token,
                  },
                },
              );
              if (resp && resp.status === 200) {
                console.log('data => ', resp.data);
                navigate('/order');
              }
            } catch (error) {
              console.log(error);
            }
          };
          handleOrder();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WebLayout>
        <Container sx={{ paddingTop: '50px' }} maxWidth="xl">
          <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
            <div ref={paypal}></div>
          </Box>
        </Container>
      </WebLayout>
    </>
  );
}

export default PaypalPage;
