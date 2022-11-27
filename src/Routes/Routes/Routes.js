import DashboardLayout from "../../Layouts/DashboardLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import AddBook from "../../Pages/DashBoard/AddBook/AddBook";
import AllBuyers from "../../Pages/DashBoard/AllBuyer/AllBuyers";
import AllSeler from "../../Pages/DashBoard/AllSeler/AllSeler";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBooks from "../../Pages/DashBoard/MyBooks/MyBooks";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Pay from "../../Pages/DashBoard/MyOrders/Pay";
import Reports from "../../Pages/DashBoard/Reports/Reports";
import Requests from "../../Pages/DashBoard/Requests/Requests";
import CategoryBooks from "../../Pages/Home/Category/CategoryBooks";
import Login from "../../Pages/LogIn/Login";
import Register from "../../Pages/Register/Register";
import Admin from "../Admin/Admin";
import Private from '../Private/Private';
import Seler from "../Seler/Seler";

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
                path: '/home',
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: async ({ params }) => fetch(`https://b612-used-products-resale-server-side-green.vercel.app/books/${params.id}`),
                element: <CategoryBooks />
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
            {
                path: '/dashboard/requests',
                element: <Admin><Requests /></Admin>
            },
            {
                path: '/dashboard/reports',
                element: <Admin><Reports /></Admin>
            },
            {
                path: '/dashboard/addbook',
                element: <Seler><AddBook /></Seler>
            },
            {
                path: '/dashboard/mybooks',
                element: <Seler><MyBooks /></Seler>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/pay/:id',
                loader: async ({ params }) => fetch(`https://b612-used-products-resale-server-side-green.vercel.app/myorders/${params.id}`),
                element: <Pay />
            }
        ]
    }
])

export default router;