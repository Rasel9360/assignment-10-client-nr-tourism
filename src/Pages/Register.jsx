import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext)


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(email, password, name, photo);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(res => {
                        console.log(res)
                        toast.success("Account created successfully!");
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err);
                toast.error("email already used please enter a valid email")
            })
            e.target.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            {/* <Helmet>
            <title>Sign Up</title>
        </Helmet> */}
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                <h1 className="text-3xl text-black mt-5 font-serif text-center font-bold">Create An Account</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-xl bg-[#F95A65] hover:bg-[#f24652]">Register</button>
                    </div>
                </form>
                <div>
                    <p className="text-center">Have already an account?<Link to='/login'><span className="btn btn-link">Login here</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;