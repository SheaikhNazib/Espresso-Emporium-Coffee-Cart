import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, taste, photo, supplier, price, details } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const price = e.target.price.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, price, details, photo };
        console.log(newCoffee);

        // send data to the server and database
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        e.target.reset();
                        navigate('/');
                    });
                }
            });
    };

    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="p-10">
                <Link to='/' className='text-2xl my-auto' style={{ fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    <FontAwesomeIcon className='me-2 my-auto' icon={faRotateLeft} size="md" />Back to home
                </Link>
                <h1 className="font-bold text-3xl text-center mt-7" style={{ color: '#331a15', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    Update Existing Coffee Details
                </h1>
                <p className="py-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Name</span>
                            </label><br />
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Chef</span>
                            </label><br />
                            <input type="text" name='chef' defaultValue={chef} placeholder="Chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Supplier</span>
                            </label> <br />
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Taste</span>
                            </label> <br />
                            <input type="text" name='taste' defaultValue={taste} placeholder="Taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Price</span>
                            </label> <br />
                            <input type="text" name='price' defaultValue={price} placeholder="Coffee price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text my-1 font-bold">Details</span>
                            </label> <br />
                            <input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text my-1 font-bold">Photo URL</span>
                        </label> <br />
                        <input type="text" name='photo' defaultValue={photo} placeholder="Photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full font-thin btn-hover hover:text-white" style={{ backgroundColor: '#d2b48c', fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Update Coffee Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;