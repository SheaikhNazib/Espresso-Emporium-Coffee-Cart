import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Store = () => {
    const loadedCoffees = useLoaderData();

    return (
        <div>
            <h2 className='my-8 text-3xl text-center' style={{ fontFamily: 'Sour Gummy, sans-serif' }}>All Coffees</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-16' style={{ backgroundColor: '#f5f4f1' }}>
                {
                    loadedCoffees.map(coffee => (
                        <Coffee
                            coffee={coffee}
                            loadedCoffees={loadedCoffees}
                            key={coffee._id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Store;