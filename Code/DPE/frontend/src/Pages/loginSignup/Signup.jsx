import React, { useState } from 'react'
import { createNewAccount } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const userData = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        zipcode: '',
        street: '',
        isAdmin: false
    }
    const history = useNavigate();


    const [userDetails, setUserDetails] = useState(userData);
    const createAccount = (e) => {
        e.preventDefault();
        console.log(userDetails);
        createNewAccount(userDetails).then(res => {
            if (res.status === 201) {
                console.log(res);
                alert(res.data);
                setUserDetails(userData);
                history('/');
            }
        })

    }

    const inputHandler = (e) => {
        if (e.target.name === 'isAdmin') {
            setUserDetails(data => ({
                ...data,
                [e.target.name]: e.target.checked,
            }))
        }
        else {
            setUserDetails(data => ({
                ...data,
                [e.target.name]: e.target.value
            }))
        }
    }


    return (
        <div className='container col-md-6' style={{ minHeight: "80vh" }}>


            <div className='my-3'><h1 style={{ color: 'blue', fontWeight: 'bold' }}>Create new account</h1></div>
            <form className="row g-3" onSubmit={createAccount}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name='firstName' value={userDetails.firstName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name='lastName' value={userDetails.lastName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" name='userName' value={userDetails.userName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={userDetails.password} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email ID</label>
                    <input type="email" className="form-control" id="email" name='email' value={userDetails.email} onChange={inputHandler} placeholder='email@example.com' />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Mobile no</label>
                    <input type="number" className="form-control" id="phoneNumber" name='phoneNumber' value={userDetails.phoneNumber} onChange={inputHandler} placeholder='9453xxxxxx' />
                </div>
                <div className="col-12">
                    <label htmlFor="street" className="form-label">Street </label>
                    <input type="text" className="form-control" id="street" placeholder="1234 Main St" name='street' value={userDetails.street} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name='city' placeholder='City' value={userDetails.city} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name='state' placeholder='State' value={userDetails.state} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="zipcode" className="form-label">Zipcode</label>
                    <input type="text" className="form-control" id="zipcode" name='zipcode' placeholder='12345' value={userDetails.zipcode} onChange={inputHandler} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>

        </div>
    )
}

export default Signup