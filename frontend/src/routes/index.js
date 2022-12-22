import HomePageAdmin from '~/pages/admin/home/HomePageAdmin';
import CartPage from '~/pages/web/cart/CartPage';
import ForgetPasswordPage from '~/pages/web/forgetPassword/ForgetPasswordPage';
import HomePage from '~/pages/web/home/HomePage';
import HomePageLogined from '~/pages/web/home/HomePageLogined';
import LoginPage from '~/pages/web/LoginPage';
import OrderPage from '~/pages/web/order/OrderPage';
import PaypalPage from '~/pages/web/pay/PaypalPage';
import PaymentPage from '~/pages/web/payment/PaymentPage';
import RegisterPage from '~/pages/web/RegisterPage';
import UpgradePage from '~/pages/web/upgrade/UpgradePage';

export const webRoutes = [
  {
    id: 1,
    path: '/',
    page: <HomePage />,
  },
  {
    id: 2,
    path: '/login',
    page: <LoginPage />,
  },
  {
    id: 3,
    path: '/register',
    page: <RegisterPage />,
  },
  {
    id: 4,
    path: '/upgrade',
    page: <UpgradePage />,
  },
  {
    id: 5,
    path: '/file/:id',
    page: <HomePageLogined />,
  },
  {
    id: 6,
    path: '/order',
    page: <OrderPage />,
  },
  {
    id: 7,
    path: '/cart',
    page: <CartPage />,
  },
  {
    id: 8,
    path: '/forget-password',
    page: <ForgetPasswordPage />,
  },
  {
    id: 9,
    path: '/*',
    page: <div>Not found</div>,
  },
  {
    id: 10,
    path: '/payment',
    page: <PaymentPage />,
  },
  {
    id: 10,
    path: '/payment/paypal',
    page: <PaypalPage />,
  },
];
export const adminRoutes = [
  {
    id: 1,
    path: '/admin',
    page: <HomePageAdmin />,
  },
];
