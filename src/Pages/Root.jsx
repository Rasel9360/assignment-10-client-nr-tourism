import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>     
            <ToastContainer position="top-center"/>       
        </div>
    );
};

export default Root;