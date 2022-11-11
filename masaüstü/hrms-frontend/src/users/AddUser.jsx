import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

 class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
          profilePhoto:"",
          firstName:"",
          lastName:"",
          emailAddress:"",
          phoneNumber:"",
          address:"",
          quitDate:"",
          startDate:"",
          birthDay:"",
          gender:"",
          middleName:""


        }
        this.changeProfilePhotoHandler=this.changeProfilePhotoHandler.bind(this);
        this.changeEmailAddressHandler=this.changeEmailAddressHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.changeStartDateHandler=this.changeStartDateHandler.bind(this);
        this.changeQuitDateHandler=this.changeQuitDateHandler.bind(this);
        this.changeBirthDayHandler=this.changeBirthDayHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeMiddleNameHandler=this.changeMiddleNameHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
    saveEmployee=(e)=>{
      e.preventDefault();
      let employee ={profilePhoto:this.state.profilePhoto,firstName:this.state.firstName,lastName:this.state.lastName,
        emailAddress:this.state.emailAddress,phoneNumber:this.state.phoneNumber,
      gender:this.state.gender,startDate:this.state.startDate,address:this.state.address,
    quitDate:this.state.quitDate,birthDay:this.state.birthDay,middleName:this.state.middleName};
      console.log("employee =>" +JSON.stringify(employee));

      EmployeeService.createEmployee(employee).then(res=>{
        this.props.history.push('/');
      })
    }
    changeProfilePhotoHandler=(event)=>{
      this.setState({profilePhoto: event.target.value});
    }

    changeFirstNameHandler=(event)=>{
      this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event)=>{
      this.setState({lastName: event.target.value});
    }
    changeEmailAddressHandler=(event)=>{
      this.setState({emailAddress: event.target.value});
    }
    changeAddressHandler=(event)=>{
      this.setState({address: event.target.value});
    }
    changePhoneNumberHandler=(event)=>{
      this.setState({phoneNumber: event.target.value});
    }
    changeGenderHandler=(event)=>{
      this.setState({gender: event.target.value});
    }
    changeStartDateHandler=(event)=>{
      this.setState({startDate: event.target.value});
    }
    changeQuitDateHandler=(event)=>{
      this.setState({quitDate: event.target.value});
    }
    changeBirthDayHandler=(event)=>{
      this.setState({birthDay: event.target.value});
    }
    changeMiddleNameHandler=(event)=>{
      this.setState({middleName: event.target.value});
    }
    cancel(){
      this.props.history.push('/user');
    }
  render() {
    return (
      <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Employe</h3>
                    <div className='card-body'>
                        <form >
                        <div className='form-group'>
                                <label >Profile Photo: </label>
                                <input placeholder='Drop his/her profile photo' name="profilePhoto" className='form-control'
                                value={this.state.profilePhoto} onChange={this.changeProfilePhotoHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >First Name: </label>
                                <input placeholder='First Name' name="firstName" className='form-control'
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Middle Name: </label>
                                <input placeholder='Middle Name' name="middleName" className='form-control'
                                value={this.state.middleName} onChange={this.changeMiddleNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Last Name: </label>
                                <input placeholder='Last Name' name="lastName" className='form-control'
                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >E-mail: </label>
                                <input placeholder='E-mail' name="emailAddress" className='form-control'
                                value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Phone Number: </label>
                                <input placeholder='Phone Number' name="phoneNumber" className='form-control'
                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Gender: </label>
                                <input placeholder='Gender' name="gender" className='form-control'
                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Address: </label>
                                <input placeholder='Address' name="address" className='form-control'
                                value={this.state.address} onChange={this.changeAddressHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Birth day: </label>
                                <input placeholder='Birth day' name="birthDay" className='form-control'
                                value={this.state.birthDay} onChange={this.changeBirthDayHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Start date: </label>
                                <input placeholder='Start date' name="startDate" className='form-control'
                                value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                            </div>
                            <div className='form-group'>
                                <label >Quit date: </label>
                                <input placeholder='Quit date' name="quitDate" className='form-control'
                                value={this.state.quitDate} onChange={this.changeQuitDateHandler}/>
                            </div>
                           
                            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
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
export default CreateEmployeeComponent
