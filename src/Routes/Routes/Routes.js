import DashboardLayout from "../../Layouts/DashboardLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/DashBoard/AllBuyer/AllBuyers";
import AllSeler from "../../Pages/DashBoard/AllSeler/AllSeler";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Login from "../../Pages/LogIn/Login";
import Register from "../../Pages/Register/Register";
import Admin from "../Admin/Admin";
import Private from '../Private/Private';

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");
const { default: ErrorPage } = require("../../Pages/Shared/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]

    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <Private><DashboardLayout /></Private>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard />
            },
            {
                path: '/dashboard/allselers',
                element: <Admin><AllSeler /></Admin>
            },
            {
                path: '/dashboard/allbuyers',
                element: <Admin><AllBuyers /></Admin>
            },
        ]
    }
])

export default router;