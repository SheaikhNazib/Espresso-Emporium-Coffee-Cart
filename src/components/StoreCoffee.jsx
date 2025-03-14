import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '../components/CartContext';

export default function StoreCoffee({ coffee, loadedCoffees, setLoadedCoffees }) {
    useEffect(() => {
        AOS.init();
    }, []);

    const { _id, name, chef, taste, price, photo } = coffee;
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        console.log('Adding to cart:', coffee); // Debugging log
        addToCart(coffee);
        Swal.fire({
            title: "Added to Cart!",
            text: `${name} has been added to your cart.`,
            icon: "success"
        });
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-7">
            <figure>
                <img data-aos="fade-right" data-aos-duration="1500"
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <Link to={`/productView/${_id}`}>
                        <button className="btn join-item bg-green-500" style={{ width: '110px' }}>View <FontAwesomeIcon className='me-2 my-auto' icon={faEye} size="md" /></button>
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="btn join-item bg-yellow-400" style={{ width: '110px' }}>Add to <FontAwesomeIcon className='me-2 my-auto' icon={faCartShopping} size="md" /></button>
                </div>
            </div>
        </div>
    );
};