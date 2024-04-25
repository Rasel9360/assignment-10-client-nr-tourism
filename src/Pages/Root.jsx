import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div className="h-[68px]"><Navbar></Navbar></div>
            <Outlet></Outlet>     
            <ToastContainer position="top-center"/>       
        </div>
    );
};

export default Root;