import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function EditUser() {

  let navigate = useNavigate();
  const {id}=useParams();

  const [user, setUser] = useState({
    profilePhoto: "",
    address: "",
    phoneNumber: ""
  })

  const { profilePhot, addres,phoneNumbe} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.profilePhoto]: e.target.value });
  }

  useEffect(()=>{
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9091/v1/api/manager/findbyid/${id}`, user);
    navigate("/user");
  }

  const loadUser = async (e)=>{
    e.preventDefault();
    const result=await axios.get(`http://localhost:9091/v1/api/manager/findbyid/${id}`);
    setUser(result.data);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User </h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Photo' className='form-label'>
              Photo
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Add his/her photo"
              name='profilePhoto'
              value={profilePhot}
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
              value={phoneNumbe}
              onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='Address' className='form-label'>
              Adress
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter his/her  address"
              name='address'
              value={addres}
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
