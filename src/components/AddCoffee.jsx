import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import gif2 from '../../images/gif/gif2.gif'
import Header from './Header';
import Footer from './Footer';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const price = e.target.price.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, price, details, photo }
        console.log(newCoffee)

        // send data to the server and database
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        e.target.reset();
                        Navigate('/');
                    });
                }
            })

    }

    return (
        <>
        <Header></Header>
            <div className='lg:w-3/4 mx-auto p-20 my-10' style={{ backgroundColor: '#f4f3f0' }}>

                <div className='flex justify-between'>
                    <Link to='/' className='text-2xl my-auto' style={{ fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><FontAwesomeIcon className='me-2 my-auto' icon={faRotateLeft} size="md" />Back to home</Link>

                    <img src={gif2} className='w-86 h-44' alt="" />
                </div>


                <div className="text-center p-10">

                    <h1 className="font-bold text-3xl" style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Add New Coffee!</h1>

                    <p className="py-6">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

                    <form onSubmit={handleAddCoffee} className="card-body">

                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Name</span>
                                </label><br />
                                <input type="text" name='name' placeholder="Coffee name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Chef</span>
                                </label><br />
                                <input type="text" name='chef' placeholder="Chef name" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Supplier</span>
                                </label> <br />
                                <input type="text" name='supplier' placeholder="Coffee supplier" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Taste</span>
                                </label> <br />
                                <input type="text" name='taste' placeholder="Taste name" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Price</span>
                                </label> <br />
                                <input type="text" name='price' placeholder="Coffee price" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text my-1 font-bold">Details</span>
                                </label> <br />
                                <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Photo URL</span>
                            </label> <br />
                            <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn w-full font-thin btn-hover hover:text-white" style={{ backgroundColor: '#d2b48c', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Add Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddCoffee;