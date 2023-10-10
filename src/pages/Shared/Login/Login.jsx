import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);

        // create new user
        signIn(email, password)
            .then(result => {
                // validation
                if (result.user.emailVerified) {
                    toast.success('User logged in successfully', result.user);
                    e.target.reset();
                    navigate('/')
                }
            })
            .catch(error => {
                toast.error('Verify your email and password', error.message);
            })
    }

    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success('User logged in successfully', {
                    position: "top-center",
                    theme: "colored"
                });
                navigate('/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-rose-50">
                <h2 className="text-3xl font-bold text-center text-rose-500 mt-4">Please Login</h2>

                <div className="hero min-h-screen bg-rose-50">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-violet-400 bg-base-100">
                            <form className="card-body">
                                <form onSubmit={handleLogin} className="w-full mx-auto">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn text-lg font-bold text-white normal-case bg-rose-500">Login</button>
                                    </div>
                                </form>
                            </form>
                            <div className="w-auto m-auto text-center my-6">
                                <button onClick={() => handleSocialLogin(googleLogin)} className="btn text-white normal-case bg-rose-500 mr-4">Google</button>
                                <button onClick={() => handleSocialLogin(githubLogin)} className="btn text-white normal-case bg-rose-500 ml-4">Github</button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-4 mb-10">Do not have an account? <Link className="text-rose-700 font-bold" to='/register'>Register</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;