import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default function ViewUser() {
    const [user,setUser]=useState({
        firstName: "",
        middleName: "" ,
        gender:"",
        lastName:"",
        birthDay:"",
        startDate:"",
        quitDate:"",
        emailAddress:"", 
        profilePhoto: "",
        state:"",
        phoneNumber:""

      })

      const {id}=useParams();

      useEffect(()=>{
        loadUser();
      }, []);

      const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:9091/v1/api/manager/findbyid/${id}`);
        setUser(result.data);
      }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> User Details</h2>
                    <div className='card'>
                        <div className='card-header'>Details of user id:{user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Photo: </b>
                                    {user.profilePhoto}
                                </li>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.firstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>MiddleName: </b>
                                    {user.middleName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Last Name: </b>
                                    {user.lastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>E-mail: </b>
                                    {user.phoneNumber}
                                </li>
                                <li className='list-group-item'>
                                    <b>Gender: </b>
                                    {user.gender}
                                </li>
                                <li className='list-group-item'>
                                    <b>Phone Number: </b>
                                    {user.phoneNumber}
                                </li>
                                <li className='list-group-item'>
                                    <b>State: </b>
                                    {user.state}
                                </li>
                                <li className='list-group-item'>
                                    <b>Start date: </b>
                                    {user.startDate}
                                </li>
                                <li className='list-group-item'>
                                    <b>Quit date: </b>
                                    {user.quitDate}
                                </li>
                                
                                <li className='list-group-item'>
                                    <b>Birthday: </b>
                                    {user.birthDay}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-outline-primary my-2' to={"/user"}>Back</Link>
                </div>
            </div>
        </div>
    )
}
