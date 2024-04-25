import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Pages/Main";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:([
            {
                path: '/',
                element: <Home></Home>
            }
        ])
    },
]);

export default Router;