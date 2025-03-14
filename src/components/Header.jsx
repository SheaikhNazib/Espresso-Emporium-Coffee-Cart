import React from 'react';
import { NavLink } from 'react-router-dom';
import nav_bg from '../../images/more/15.jpg';
import logo from '../../images/more/logo1.png';
import Hero from './Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../providers/AuthProvider'; 

const Header = () => {
    const { user, logout } = useAuth(); 

    const handleLogout = () => {
        logout().then(() => {
            window.location.href = '/';
        });
    };

    const links = (
        <>
            <li><NavLink to="/" className="text-white">HOME</NavLink></li>
            {user?.email === 'sheaikhnazib9@gmail.com' && (
                <>
                    <li><NavLink to="/addCoffee" className="text-white">ADD COFFEE</NavLink></li>
                    <li><NavLink to="/users" className="text-white">USERS</NavLink></li>
                </>
            )}
            <li><NavLink to="/store" className="text-white">BUY NOW</NavLink></li>
            <li><NavLink to="/cart" className="text-white">CART</NavLink></li>
            <li><NavLink to="/feedback" className="text-white">FEEDBACK</NavLink></li>
        </>
    );

    return (
        <div
            className="navbar bg-base-100 "
            style={{ backgroundImage: `url(${nav_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <img className='ms-6' src={logo} style={{ width: '55px', height: '70px' }} alt="" />
                <a href='/' className="text-xl font-bold glow-effect">COFFEE CART</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end text-white pe-7">
                {user ? (
                    <>
                        <span className="mr-4">Hi, {user.displayName || user.email}</span>
                        <button onClick={handleLogout} className="btn btn-ghost">
                            <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
                        </button>
                    </>
                ) : (
                    <NavLink to="/signin" className="btn text-black" style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Login <FontAwesomeIcon icon={faCircleUser}  size="2x" /></NavLink>
                )}
            </div>
        </div>
    );
};

{/* <Hero></Hero> */}

export default Header;