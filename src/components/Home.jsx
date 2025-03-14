import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';
import StoreCoffee from './StoreCoffee';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assuming you have a way to get the authenticated user's email
import { useAuth } from '../providers/AuthProvider'; // Adjust the import based on your auth implementation

export default function Home() {
    useEffect(() => {
        AOS.init();
        console.log('AOS initialized');
    }, []);

    const coffees = useLoaderData();

    // Ensure coffees is an array
    const [loadedCoffees, setLoadedCoffees] = useState(Array.isArray(coffees) ? coffees : []);

    // Get the authenticated user's email
    const { user } = useAuth(); // Adjust based on your auth implementation
    const userEmail = user?.email;

    return (
        <div className='max-w-6xl mx-auto'>
            <div data-aos="fade-right" className='flex justify-center items-center flex-col mt-24'>
                <p data-aos="fade-left" data-aos-duration="2000">---Sip & Savor---</p>
                <h2 className='text-2xl my-2 font-semibold' data-aos="fade-left" data-aos-duration="2000" style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif' }}>Our Popular Products</h2>

                {userEmail === 'sheaikhnazib9@gmail.com' ? (
                    <Link to='/addCoffee' data-aos="fade-right" data-aos-duration="2000">
                        <button className='btn-hover hover:text-white text-black px-3 py-2 ' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Add Coffee</button>
                    </Link>
                ) : (
                    <Link to='/cart' data-aos="fade-right" data-aos-duration="2000">
                        <button className='btn-hover hover:text-white text-black px-3 py-2 ' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>View Cart</button>
                    </Link>
                )}
            </div>

            <h2 className='my-8 text-3xl text-center' data-aos="fade-up" data-aos-duration="2000" style={{ fontFamily: 'Sour Gummy, sans-serif' }}>Total Coffee: {loadedCoffees.length}</h2>

            <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-16' style={{ backgroundColor: '#f5f4f1' }}>
                {
                    loadedCoffees.map(coffee => (
                        userEmail !== 'sheaikhnazib9@gmail.com' ? (
                            <StoreCoffee
                                coffee={coffee}
                                loadedCoffees={loadedCoffees}
                                setLoadedCoffees={setLoadedCoffees}
                                key={coffee._id}
                            />
                        ) : (
                            <Coffee
                                coffee={coffee}
                                loadedCoffees={loadedCoffees}
                                setLoadedCoffees={setLoadedCoffees}
                                key={coffee._id}
                            />
                        )
                    ))
                }
            </div>
        </div>
    );
};