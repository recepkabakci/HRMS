import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function AddUser() {

        let navigate=useNavigate()

        const {id} = useParams();

    const [user,setUser]=useState({
      firstName:"",
      middleName:"",
      emailAddress:""
    })

    const{firstName,middleName,emailAddress}=user

    const onInputChange=(e)=>{
      setUser({...user, [e.target.firstName]:e.target.value})

    }

    useEffect(()=>{
      loadUser();
    }, []);

    const onSubmit= async (e)=>{
      e.preventDefault();
      await axios.post(`http://localhost:9091/v1/api/manager/findAllEmployee/${id}`,user)
      navigate("/user");
    }
    const loadUser = async ()=>{
      const result=await axios.get(`http://localhost:9091/v1/api/manager/findAllEmployee/${id}`)
      setUser(result.data)
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User </h2> 
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
            FirstName
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your name"
            name="firstName"
            value={firstName}
            onChange={(e)=>onInputChange(e)}
            /> 
            </div>
            <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              E-mail
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your e-mail adress"
            name="emailAddress"
            value={emailAddress}
            onChange={(e)=>onInputChange(e)}
            /> 
            </div> 
            <button type="submit" className="btn btn-outline-primary" >Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/user">Cancel</Link>
            </form>        
        </div>
      </div>
    </div>
  )
}
