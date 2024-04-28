import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Pages/Root";
import AddTourist from "../Pages/AddTourist";
import SpotsDetails from "../Components/SpotsDetails";
import AllTouristSpots from "../Pages/AllTouristSpots";
import ErrorPage from "../Pages/ErrorPage";
import MyList from "../Pages/MyList";
import UpdateSpots from "../Pages/UpdateSpots";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-ten-server-bay.vercel.app/spots')
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
                element: <PrivateRouter><AddTourist></AddTourist></PrivateRouter>
            },
            {
                path: '/details/:id',
                element: <PrivateRouter><SpotsDetails></SpotsDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-ten-server-bay.vercel.app/spots/${params.id}`)

            },
            {
                path: '/myList',
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><UpdateSpots></UpdateSpots></PrivateRouter>,
            },
            {
                path: '/allTouristSpots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch('https://assignment-ten-server-bay.vercel.app/spots')
            }
        ])
    },
]);

export default Router;