import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(authContext);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info updated on DB', data);
                    });

                Swal.fire({
                    title: 'Success!',
                    text: 'Signed in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    navigate('/');
                });
            })
            .catch(error => {
                console.error('Error signing in:', error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email: result.user.email, lastSignInTime };

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info updated on DB', data);
                    });

                Swal.fire({
                    title: 'Success!',
                    text: 'Signed in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    navigate('/');
                });
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero min-h-screen flex justify-center items-center bg-gradient-to-br from-[#8B4513] to-[#D2B48C]">
            <div className="card bg-[#FFF8E1] shadow-2xl p-8 rounded-2xl w-full max-w-md">
                <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl font-bold text-center text-[#5C4033]">Welcome to Coffee Haven</motion.h1>
                <form onSubmit={handleSignIn} className="mt-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <label className="block text-[#5C4033]">Email</label>
                        <input type="email" className="input w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D2691E]" placeholder="Email" name='email' required />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <label className="block text-[#5C4033] mt-4">Password</label>
                        <input type="password" className="input w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D2691E]" placeholder="Password" name='password' required />
                    </motion.div>
                    <div className="text-right mt-2">
                        <a className="text-[#D2691E] hover:underline cursor-pointer">Forgot password?</a>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} className="btn w-full mt-4 bg-[#D2691E] text-white py-2 rounded-lg shadow-md">Sign In</motion.button>
                    <p className="text-center mt-4">Don't have an account? <Link to="/signup" className='text-[#D2691E] hover:underline'>Sign Up</Link></p>
                </form>
                <div className="text-center mt-4">Or</div>
                <motion.button whileHover={{ scale: 1.05 }} className="btn mt-2 w-full bg-red-500 text-white py-2 rounded-lg shadow-md flex justify-center items-center" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon className='me-2' icon={faGoogle} size="md" /> Sign In with Google
                </motion.button>
            </div>
        </motion.div>
    );
};

export default SignIn;
