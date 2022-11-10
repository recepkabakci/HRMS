import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
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

  const { first,last, email,photo,middle ,gender,phone,start,quit,birth,state} = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.firstName]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9091/v1/api/manager/createemployee", user)
    navigate("/user");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User </h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Photo' className='form-label'>
              Photo
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Add his/her photo"
              name='photo'
              value={photo}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her first name"
              name='firstName'
              value={first}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='MiddleName' className='form-label'>
              Middle Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her middle name"
              name='middleName'
              value={middle}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her last name"
              name='lastName'
              value={last}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her e-mail"
              name='emailAddress'
              value={email}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Phone number' className='form-label'>
              Phone Number
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her phone number"
              name='phoneNumber'
              value={phone}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Gender' className='form-label'>
             Gender
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her gender"
              name='gender'
              value={gender}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='State' className='form-label'>
              State
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her state"
              name='state'
              value={state}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Birthday' className='form-label'>
              Birthday
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her birth day"
              name='birthDay'
              value={birth}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Start Date' className='form-label'>
              Start date
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her start date"
              name='startDate'
              value={start}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Quit Date' className='form-label'>
              Quit Date
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her quit date"
              name='quitDate'
              value={quit}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          
          
          <button type="submit" className='btn btn-outline-primary'>Submit</button>
         
          <Link type="submit" className='btn btn-danger mx-2' to="/user">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
