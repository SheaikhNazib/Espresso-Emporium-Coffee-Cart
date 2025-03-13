import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StoreCoffee({ coffee, loadedCoffees, setLoadedCoffees }) {
    useEffect(() => {
        AOS.init();
    }, []);

    const { _id, name, chef, taste, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // update the loaded coffee state
                            const remainingCoffees = loadedCoffees.filter(coffee => coffee._id !== _id);
                            setLoadedCoffees(remainingCoffees);

                        }
                    })

            }
        });
    }

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
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <Link to={`/view/${_id}`}>
                        <button className="btn join-item bg-green-500" style={{width: '90px'}}>Buy <FontAwesomeIcon className='me-2 my-auto' icon={faEye} size="md" /></button>
                    </Link>

                    {/* <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item bg-blue-500" style={{width: '90px'}}>Edit <FontAwesomeIcon className='me-2 my-auto' icon={faPenToSquare} size="md" /></button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn join-item bg-red-500" style={{width: '90px'}}>Delete <FontAwesomeIcon className='me-2 my-auto' icon={faTrash} size="md" /></button> */}
                </div>
            </div>
        </div>
    );
};
