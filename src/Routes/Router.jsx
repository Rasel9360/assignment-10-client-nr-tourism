import {
    createBrowserRouter,    
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Pages/Root";
import AddTourist from "../Pages/AddTourist";
import SpotsDetails from "../Components/SpotsDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:([
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://assignment-ten-server-bay.vercel.app/spots')
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
                path: '/addTourist',
                element: <AddTourist></AddTourist>
            },
            {
                path: '/details/:id',
                element: <SpotsDetails></SpotsDetails>,
                loader: ({params}) => fetch(`https://assignment-ten-server-bay.vercel.app/spots/${params.id}`)
            }
        ])
    },
]);

export default Router;