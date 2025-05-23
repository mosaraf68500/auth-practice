import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Navbar from "../components/Navbar";
import Login from "../auth/Login";
import Registration from "../auth/registetion";
import Home from "../layouts/Home";
import Orders from "../components/Orders";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Loading from "../Loading/Loading";


export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"login",
                Component:Login
            },
            {
                path:"registetion",
                Component:Registration
            },

            {
                path:"loading",
                Component:Loading
            },

            {
                path:"orders",
                // Component:Orders
                element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
            }
        ]
    },
    
])