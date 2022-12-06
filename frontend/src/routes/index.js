import HomePage from "~/pages/web/HomePage";
import LoginPage from "~/pages/web/LoginPage";
import RegisterPage from "~/pages/web/RegisterPage";

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
]