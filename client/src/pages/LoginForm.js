// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      password: '',
    });
  };

  return (
      <div className="container login">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <div className="card card-signin my-5">
              <div className="card-body loginForm">
                <h5 className="card-title text-center fs-2 fw-bold">Sign in</h5>
                <form className="login-form" onSubmit={handleFormSubmit}>
                  <div className="form-label-group">
                    <input type="text" id="username-login" className="form-control" placeholder="Username" value={userFormData.username}
                    onChange={handleInputChange} required autofocus/>
                    <label htmlFor="username-login" className="fs-6 mt-1">Username</label>
                  </div>
                  <div className="form-label-group mt-3">
                    <input type="password" id="password-login" className="form-control" placeholder="Password" required value={userFormData.password} onChange={handleInputChange}/>
                    <label htmlFor="password-login" className="fs-6 mt-1">Password</label>
                  </div>
                  <div className="container btnLogIn">
                    <div className="row">
                      <div className="col" />
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn btn-outline-dark btn-med signInCTA" type="submit"><Link to='/login'>Login</Link></button>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="loginCreateAccount mb-3 d-flex justify-content-end">
                    <p>New around here?</p>
                    <Link to='/landing'>Create your account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4" />
        </div>
      </div>
    );
  };

export default LoginForm;