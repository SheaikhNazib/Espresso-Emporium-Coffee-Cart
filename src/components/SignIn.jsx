import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

                // Update last login time
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

                // Update last login time
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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                                <p>Don't Have an Account? <Link to="/signup" className='text-blue-500'>Sign Up</Link></p>
                            </fieldset>
                            <button type="button" className="btn btn-neutral mt-4" onClick={handleGoogleSignIn}>Sign In with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;