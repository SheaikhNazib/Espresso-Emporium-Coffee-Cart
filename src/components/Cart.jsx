import React from 'react';
import { useCart } from '../components/CartContext';
import Footer from './Footer';
import Header from './Header';
import empty from '../../images/gif/empty_cart.gif';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
        <>
            <Header></Header>

            <div className="cart" style={{ backgroundColor: '#eceae3' }}>
                <h2 className='text-center text-4xl font-bold pt-6 pb-12'>Your Cart</h2>

                <div className='flex justify-around'>
                    <div>
                        {cart.length === 0 ? (
                            <div>
                                <p className='text-3xl font-semibold'>Your cart is empty !!!</p>
                                <img className='w-42 h-52 mx-auto my-6' src={empty} alt="" />
                            </div>
                        ) : (
                            <ul>
                                {cart.map(item => (
                                    <li key={item._id}>
                                        <div className='flex items-center gap-40 px-8 my-3'>
                                            <img src={item.photo} data-aos="fade-right" data-aos-duration="1000" alt="" />
                                            <div data-aos="fade-left" data-aos-duration="1000">
                                                <p><strong>Coffee Name:</strong> {item.name}</p>
                                                <p><strong>Coffee Price:</strong> {item.price}</p>
                                                <button onClick={() => removeFromCart(item._id)} className='btn btn-error text-white mt-2'>Remove</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h3 className='text-3xl font-bold'>Total Amount: {cart.length === 0 ? '0.00' : totalPrice.toFixed(2)} Taka</h3>

                        {cart.length > 0 ? (
                            <button data-aos="fade-down" data-aos-duration="1000" className='btn-hover hover:text-white text-black px-3 py-2 w-full mt-8' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Confirm Your order</button>
                        ) : (
                            <Link to='/store'>
                                <button data-aos="fade-down" data-aos-duration="1000" className='btn-hover hover:text-white text-black px-3 py-2 w-full mt-8' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Buy Now</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Cart;