import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);

    const handleUserDelete = id => {

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


                //delete form the database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    })
            }
        });
    }

    return (
        <>
            <Header></Header>

            <div className='px-36 pt-10' style={{ backgroundColor: '#f4f3f0' }}>

                <Link to='/' className='text-2xl my-auto' style={{ fontFamily: 'Sour Gummy, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><FontAwesomeIcon className='me-2 my-auto' icon={faRotateLeft} size="md" />Back to home</Link>

                <h2 className="text-3xl mt-8 text-center mb-8">Total Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last login</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUserDelete(user._id)}
                                            className="btn join-item bg-red-500" style={{ width: '90px' }}>Delete <FontAwesomeIcon className='me-2 my-auto' icon={faTrash} size="md" /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Users;