import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Profile() {
    const [users,setUsers] = useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>ARDA</td>
                                <td>Demir</td>
                                <td>ardademir@gmail.com</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <Link className='btn btn-outline-primary mx-2'
                                to={`/edituser/${users.id}`}>Edit</Link>
                <Link className="btn btn-outline-danger mx-2" to="/">Back To Home</Link>
            </div>
        </div>
    )
}

