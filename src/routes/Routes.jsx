import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/login/Login";
import Signup from "../pages/login/signup/Signup";
import NotFound404 from "../pages/shared/notFoundPages/NotFound404";
import Chef from '../pages/shared/chef/Chef'
import PrivateRoute from "./PrivateRoute";
import Tarms from "../pages/shared/tarms/Tarms";
import Blogs from "../pages/shared/blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://foodian-server-fensami.vercel.app/chefdata')
                
            },
            {
                path: 'chef/:chefId',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>,
                loader: ({params}) => fetch(`https://foodian-server-fensami.vercel.app/chefdata/${params.chefId}`)

            },
            {
             path: 'tarms',
             element: <Tarms></Tarms>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>

            },
            
            
            {
                path: '*',
                element: <NotFound404></NotFound404>
            }
        ]
    }
])
export default router;