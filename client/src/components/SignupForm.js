import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //use try/catch instead of promises to handle errors
    try {
      //execute addUser mutation and pass in variable data from form 
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <div className="col-3">            
      <div className="card card-signUp">
        <div className="card-body signUpForm rounded">
          <p className="card-title text-center fs-4 fw-bold createTitle">Fill out the form below:</p>
          <form className="login-form" onSubmit={handleFormSubmit}>
            <div className="form-label-group">
              <input type="text" id="username-login" className="form-control" placeholder="Username" required autofocus value={userFormData.username}
                    onChange={handleInputChange}/>
              <label htmlFor="username-login" className="fs-6 mt-1">Username</label>
            </div>
            <div className="form-label-group">
              <input type="text" id="email-login" className="form-control" placeholder="Email Address" required autofocus value={userFormData.email}
                    onChange={handleInputChange}/>
              <label htmlFor="username-login" className="fs-6 mt-1">Email Address</label>
            </div>
            <div className="form-label-group mt-3">
              <input type="password" id="password-login" className="form-control" placeholder="Password" required value={userFormData.password}
                    onChange={handleInputChange}/>
              <label htmlFor="password-login" className="fs-6 mt-1">Password</label>
            </div>
            <div className="container btnLogIn">
              <div className="row">
                <div className="col" />
                <div className="col d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-light logButton signUpCTA" type="submit"><a href="#" className="submitBut nav-link text-light">Submit</a></button>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="createAccountForm mb-3 d-flex justify-content-end">
              <p>Already a member?</p><Link to='/login' className='d-block text-center mt-2 small goCreateAccount'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;