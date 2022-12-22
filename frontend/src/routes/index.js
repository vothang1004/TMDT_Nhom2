import HomePageAdmin from "~/pages/admin/home/HomePageAdmin";
import CartPage from "~/pages/web/cart/CartPage";
import HomePage from "~/pages/web/home/HomePage";
import HomePageLogined from "~/pages/web/home/HomePageLogined";
import LoginPage from "~/pages/web/LoginPage";
import OrderPage from "~/pages/web/order/OrderPage";
import RegisterPage from "~/pages/web/RegisterPage";
import UpgradePage from "~/pages/web/upgrade/UpgradePage";

export const webRoutes = [
    {
        id: 1,
        path: '/',
        page: <HomePage />
    },
    {
        id: 2,
        path: '/login',
        page: <LoginPage />
    },
    {
        id: 3,
        path: '/register',
        page: <RegisterPage />
    },
    {
        id: 4,
        path: '/upgrade',
        page: <UpgradePage />
    },
    {
        id: 5,
        path: '/file/:id',
        page: <HomePageLogined />
    },
    {
        id: 6,
        path: '/order',
        page: <OrderPage />
    },
    {
        id: 7,
        path: '/cart',
        page: <CartPage />
    },
    {
        id: 8,
        path: '/*',
        page: <div>Not found</div>
    },
]
export const adminRoutes = [
    {
        id: 1,
        path: '/admin',
        page: <HomePageAdmin />
    },
]