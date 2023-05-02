import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import NotFound404 from "../pages/shared/notFoundPages/NotFound404";
// import ChefDetails from "../pages/shared/chefDetails/ChefDetails";
import BestDishes from "../pages/shared/BestDishes/BestDishes";
import Chef from "../pages/shared/chef/Chef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefdata')
                
            },
            {
                path: 'chef',
                element:<Chef></Chef>,
                // loader: () => fetch('http://localhost:5000/chefdata')

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
                path: 'bestDishes/:bestDishesId',
                element: <BestDishes></BestDishes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefdata/${params.bestDishesId}`)
            },
            {
                path: '*',
                element: <NotFound404></NotFound404>
            }
        ]
    }
])
export default router;