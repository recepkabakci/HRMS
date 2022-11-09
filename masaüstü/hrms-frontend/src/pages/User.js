import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function User() {

    const [users,setUsers] = useState([])
    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:9091/v1/api/manager/findAllEmployee")
        setUsers(result.data);
    }
   

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">MiddleName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users.map((user,index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.emailAddress}</td>
                            <td>
                                <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/edituser/${user.id}`}>Edit</Link>
                            </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
                <Link className='btn btn-outline-dark' to="/adduser">Add User</Link>
                <Link className="btn btn-outline-danger mx-2" to="/">Back To Home</Link>
            </div>
        </div>
    )
}
