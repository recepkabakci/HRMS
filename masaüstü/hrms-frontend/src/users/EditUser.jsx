import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


class UpdateEmployeeComponent extends Component {
 


  constructor(props) {
    super(props)

    this.state = {
      
      profilePhoto: "",
      phoneNumber: "",
      emailAddress: "",

    }
    this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeProfilePhotoHandler = this.changeProfilePhotoHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }


  componentDidMount() {
    EmployeeService.getEmployeeById(1).then((res) => {
      let employee = res.data;
      this.setState({
        profilePhoto: employee.profilePhoto,
        phoneNumber: employee.phoneNumber,
        emailAddress: employee.emailAddress
      });
    })
  }
  updateEmployee = (e) => {
    e.preventDefault();
    let employee = { profilePhoto: this.state.profilePhoto, phoneNumber: this.state.phoneNumber, emailAddress: this.state.emailAddress };
    console.log("employee =>" + JSON.stringify(employee));


  }

  changeProfilePhotoHandler = (event) => {
    this.setState({ profilePhoto: event.target.value });
  }
  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  }
  changeEmailAddressHandler = (event) => {
    this.setState({ emailAddress: event.target.value });
  }
  cancel() {
    this.props.history.push('/user');
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Update Employe</h3>
              <div className='card-body'>
                <form >
                  <div className='form-group'>
                    <label >Profile Photo: </label>
                    <input placeholder='Drop a profile photo here' name="profilePhoto" className='form-control'
                      value={this.state.profilePhoto} onChange={this.changeProfilePhotoHandler} />
                  </div>
                  <div className='form-group'>
                    <label >Phone Number: </label>
                    <input placeholder='Enter his/her phone number' name="phoneNumber" className='form-control'
                      value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                  </div>
                  <div className='form-group'>
                    <label >E-mail: </label>
                    <input placeholder='Enter his/her E-mail adress' name="emailAddress" className='form-control'
                      value={this.state.emailAddress} onChange={this.changeEmailAddressHandler} />
                  </div>
                  <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                  <Link type="submit" className='btn btn-danger mx-2' to="/user">Cancel</Link>
                </form>
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}
export default UpdateEmployeeComponent
