import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../components/providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(authContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        
        console.log('signup form is here', email, password)

        createUser(email, password)
        .then(result =>{
            console.log('user created at firebase',result.user)
            const createAt = result?.user?.metadata?.creationTime;

            const newUser = {name, email, createAt}

            //save new user info to the database
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log("user created to db",data)
                if(data.insertedId){
                    console.log('user created in database')
                    navigate('/'); // Redirect to home page
                }
            })
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="Your Name" name='name' />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;