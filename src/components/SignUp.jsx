import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(authContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        
        createUser(email, password)
        .then(result => {
            const createAt = result?.user?.metadata?.creationTime;
            const newUser = { name, email, createAt };

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate('/signin');
                }
            });
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
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
                    .then(() => {
                        navigate('/');
                    });
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
            });
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero min-h-screen flex justify-center items-center bg-gradient-to-br from-[#8B4513] to-[#D2B48C]">
            <div className="card bg-[#FFF8E1] shadow-2xl p-8 rounded-2xl w-full max-w-md">
                <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl font-bold text-center text-[#5C4033]">Join Coffee Haven</motion.h1>
                <form onSubmit={handleSignUp} className="mt-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <label className="block text-[#5C4033]">Name</label>
                        <input type="text" className="input w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D2691E]" placeholder="Your Name" name='name' required />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <label className="block text-[#5C4033] mt-4">Email</label>
                        <input type="email" className="input w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D2691E]" placeholder="Email" name='email' required />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <label className="block text-[#5C4033] mt-4">Password</label>
                        <input type="password" className="input w-full p-3 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D2691E]" placeholder="Password" name='password' required />
                    </motion.div>
                    <motion.button whileHover={{ scale: 1.05 }} className="btn w-full mt-4 bg-[#D2691E] text-white py-2 rounded-lg shadow-md">Sign Up</motion.button>
                </form>
                <div className="text-center mt-4">Or</div>
                <motion.button whileHover={{ scale: 1.05 }} className="btn mt-2 w-full bg-red-500 text-white py-2 rounded-lg shadow-md flex justify-center items-center" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon className='me-2' icon={faGoogle} size="md" /> Sign Up with Google
                </motion.button>
            </div>
        </motion.div>
    );
};

export default SignUp;