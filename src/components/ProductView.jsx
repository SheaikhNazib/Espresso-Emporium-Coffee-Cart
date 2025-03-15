import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useCart } from '../components/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

export default function ProductView() {
    const { id } = useParams();
    const [coffee, setCoffee] = useState(null);

    const { addToCart } = useCart();

    useEffect(() => {
        AOS.init();
        fetch(`http://localhost:5000/coffee/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data))
            .catch(error => console.error('Error fetching coffee details:', error));
    }, [id]);

    if (!coffee) {
        return <p className="text-center mt-10 text-xl">Loading coffee details...</p>;
    }

    const handleAddToCart = () => {
        addToCart(coffee);
        Swal.fire({
            title: "Added to Cart!",
            text: `${coffee.name} has been added to your cart.`,
            icon: "success"
        });
    };

    return (
        <>
        <Header></Header>
            <div className="max-w-6xl mx-auto p-20 bg-white shadow-md rounded-md mt-10" style={{ backgroundColor: '#f4f3f0' }}>

                <Link to='/' className='text-2xl my-auto' style={{ fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <FontAwesomeIcon className='me-2 my-auto' icon={faRotateLeft} size="md" />Back to home
                </Link>

                <img data-aos="fade-up" data-aos-duration="1000" src={coffee.photo} alt={coffee.name} className="w-full h-64 object-contain rounded-md" />
                <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl font-bold mt-4 text-center">{coffee.name}</h2>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-xl font-bold mt-4 underline">Details:</h2>
                    <p className="text-lg text-gray-700 mt-2"><strong>Chef:</strong> {coffee.chef}</p>
                    <p className="text-lg text-gray-700"><strong>Taste:</strong> {coffee.taste}</p>
                    <p className="text-lg text-gray-700"><strong>Description:</strong> {coffee.description || 'No description available'}</p>
                    <p className="text-lg text-gray-700"><strong>Category:</strong> {coffee.category || 'Not specified'}</p>
                    <p className="text-lg text-gray-700"><strong>Price:</strong> ${coffee.price || 'N/A'}</p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="btn mt-2" style={{ width: '150px', backgroundColor: '#d2b48c', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Add to Cart
                </button>

            </div>
            <Footer></Footer>
        </>
    );
}