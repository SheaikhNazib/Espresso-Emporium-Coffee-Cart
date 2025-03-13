import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const coffees = useLoaderData();

    // Ensure coffees is an array
    const [loadedCoffees, setLoadedCoffees] = useState(Array.isArray(coffees) ? coffees : []);

    return (
        <div>

            <div className='flex justify-center items-center flex-col mt-24'>
                <p>---Sip & Savor---</p>
                <h2 className='text-2xl my-2 font-semibold' style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif' }}>Our Popular Products</h2>

                <Link to='/addCoffee'>
                    <button className='btn-hover hover:text-white text-black px-3 py-2 ' style={{ fontFamily: 'Sour Gummy, sans-serif', background: '#e3b577' }}>Add Coffee</button>
                </Link>
            </div>


            <h2 className='my-8 text-3xl text-center'>Total Coffee: {loadedCoffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-16' style={{ backgroundColor: '#f5f4f1' }}>
                {
                    loadedCoffees.map(coffee => <Coffee
                        coffee={coffee}
                        loadedCoffees={loadedCoffees}
                        setLoadedCoffees={setLoadedCoffees}
                        key={coffee._id}
                    ></Coffee>)
                }
            </div>


        </div>
    );
};

export default Home;