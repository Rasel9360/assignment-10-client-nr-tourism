import {
    createBrowserRouter,    
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Pages/Root";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    },
]);

export default Router;