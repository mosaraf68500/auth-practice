import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Navbar from "../components/Navbar";
import Login from "../auth/Login";
import Registration from "../auth/registetion";
import Home from "../layouts/Home";


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
        ]
    },
    
])