import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Footer from "../pages/Footer/Footer";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import Services from "../pages/Services/Services";
import VocationalDetails from "../pages/VocationalWork/VocationalDetails";
import DisplayRewards from "../pages/Rewards/DisplayRewards";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Services></Services></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/vocationalDetails',
                element: <PrivateRoute><VocationalDetails></VocationalDetails></PrivateRoute>,
                loader: () => fetch('/crafts.json')
            },
            {
                path: '/displayRewards',
                element: <PrivateRoute><DisplayRewards></DisplayRewards></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    }
]);

export default router;