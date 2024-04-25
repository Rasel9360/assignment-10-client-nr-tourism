import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ])
    },
]);

export default Router;