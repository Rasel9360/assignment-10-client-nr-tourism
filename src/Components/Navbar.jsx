import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.success("Logged out successfully!")
            })
            .catch(err => console.error(err));
    }

    const navLinks = <>
        <li><NavLink to='/' className={'text-sm font-bold'}>Home</NavLink></li>
        <li><NavLink to='/blogs' className={'text-sm font-bold'}>Blog</NavLink></li>
        <li><NavLink to='/profile' className={'text-sm font-bold'}>Update Profile</NavLink></li>
        <li><NavLink to='/contact' className={'text-sm font-bold'}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md lg:px-16 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-bold font-serif"><span className="text-[#F95A65]">NR</span> Tourism</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full tooltip" title={user?.displayName}>
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className=" z-[1] shadow menu menu-lg  dropdown-content bg-base-100 rounded-lg ">
                                <li><a>{user.displayName}</a></li>
                                <li className="bg-[#F95A65] hover:bg-[#f24652] text-white rounded-lg" onClick={handleSignOut}><a><CiLogout /> Logout</a></li>
                            </ul>
                        </div> :
                        <div className="space-x-3">
                            <Link to='/login'><button className="btn text-white text-xl bg-[#F95A65] hover:bg-[#f24652]">Login</button></Link>
                            <Link to='/register'><button className="btn text-white text-xl bg-[#F95A65] hover:bg-[#f24652]">Register</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;