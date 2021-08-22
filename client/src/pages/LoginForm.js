// see SignupForm.js for comments
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { HashLink } from "react-router-hash-link";

const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userFormData;
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({
        variables: { ...userFormData },
      });
      const { token, user } = await response.json();
      console.log(user);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }

    // setUserFormData({
    //   username: "",
    //   password: "",
    // });
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
                  <input
                    type="text"
                    id="username-login"
                    className="form-control"
                    placeholder="Username"
                    defaultValue={username}
                    onBlur={handleInputChange}
                    required
                    autofocus
                  />
                  <label htmlFor="username-login" className="fs-6 mt-1">
                    Username
                  </label>
                </div>
                <div className="form-label-group mt-3">
                  <input
                    type="password"
                    id="password-login"
                    className="form-control"
                    placeholder="Password"
                    required
                    defaultValue={password}
                    onBlur={handleInputChange}
                  />
                  <label htmlFor="password-login" className="fs-6 mt-1">
                    Password
                  </label>
                </div>
                {error && <div>Login failed</div>}

                <div className="container btnLogIn">
                  <div className="row">
                    <div className="col" />
                    <div className="col d-flex justify-content-end">
                      <button
                        className="btn btn btn-outline-dark btn-med signInCTA"
                        type="submit"
                      >
                        Log in
                        {/* <Link to="/dashboard">Login</Link> */}
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="loginCreateAccount mb-3 d-flex justify-content-end">
                  <p>New around here? </p>
                  {/* <Link to="/">Create your account</Link> */}
                  <HashLink smooth to="/#jointhecause">
                    Create your account
                  </HashLink>
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
