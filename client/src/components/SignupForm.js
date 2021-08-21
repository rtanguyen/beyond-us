import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

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
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
          <div classname="container">
            <div className="card card-signUp">
              <div className="card-body signUpForm rounded">
                <p className="card-title text-center fs-4 fw-bold createTitle">
                Fill out the form below:
                </p>
                <form className="login-form" onSubmit={handleFormSubmit}>
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="xyz@gmail.com" value={userFormData.email}
                onChange={handleInputChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="username" value={userFormData.username}
                onChange={handleInputChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Test1234" value={userFormData.password}
                onChange={handleInputChange}/>
                  </div>
                  <div className="container btnLogIn">
              <div className="row">
                <div className="col" />
                <div className="col d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-light logButton signUpCTA"
                    type="submit"
                  >
                    <a href="#" className="submitBut nav-link text-light">
                      Submit
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="createAccountForm mb-3 d-flex justify-content-end">
              <p>Already a member?</p>
              <p className="d-block text-center mt-2 small goCreateAccount">
              <Link
                to="/login">
                Login
              </Link></p>
            </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
