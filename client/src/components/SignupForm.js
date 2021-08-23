import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { validateEmail } from "../utils/helpers";
import { Link } from "react-router-dom";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userFormData;
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  function handleInputChange(e) {
    //validation
    if (e.target.name === "email") {
      const isEmailValid = validateEmail(e.target.value);
      console.log(emailInvalid);
      if (!isEmailValid) {
        setEmailErrorMessage("Please enter a valid email.");
        setEmailInvalid(!isEmailValid);
      } else {
        setEmailErrorMessage("");
        setEmailInvalid(!isEmailValid);
      }
    } else if (e.target.name === "username") {
      // let nameValueEmpty = formState.name.length === 0;
      if (!e.target.value.length) {
        console.log(nameErrorMessage);
        console.log(e.target.value.length);
        setNameErrorMessage("Please fill out this field.");
        setNameInvalid(true);
      } else {
        setNameErrorMessage("");
        setNameInvalid(false);
      }
    } else if (e.target.name === "password") {
      if (!e.target.value.length) {
        setPasswordErrorMessage("Please fill out this field.");
        setPasswordInvalid(true);
      } else {
        setPasswordErrorMessage("");
        setPasswordInvalid(false);
      }
    }
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  }

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
    <div className="container">
      <div className="card card-signUp">
        <div className="card-body signUpForm rounded">
          <p className="card-title text-center fs-4 fw-bold createTitle">
            Fill out the form below:
          </p>
          <form className="login-form" onSubmit={handleFormSubmit}>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="xyz@gmail.com"
                  defaultValue={email}
                  onBlur={handleInputChange}
                />
                <div
                  class={`input_underline ${
                    emailInvalid ? "invalidInput" : ""
                  }`}
                ></div>
                {emailErrorMessage && (
                  <p className="error-text">
                    {" "}
                    <i class="bi bi-exclamation-triangle" /> {emailErrorMessage}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="username"
                defaultValue={username}
                onBlur={handleInputChange}
              />
              <div
                class={`input_underline ${nameInvalid ? "invalidInput" : ""}`}
              ></div>
              {nameErrorMessage && (
                <p className="error-text">
                  {" "}
                  <i class="bi bi-exclamation-triangle" /> {nameErrorMessage}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Test1234"
                defaultValue={password}
                onBlur={handleInputChange}
              />
              <div
                class={`input_underline ${
                  passwordInvalid ? "invalidInput" : ""
                }`}
              ></div>
              {passwordErrorMessage && (
                <p className="error-text">
                  {" "}
                  <i class="bi bi-exclamation-triangle" />{" "}
                  {passwordErrorMessage}
                </p>
              )}
            </div>
            <div className="container btnLogIn">
              <div className="row">
                <div className="col" />
                <div className="col d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-light logButton signUpCTA"
                    type="submit"
                  >
                    Submit
                    {/* <a href="#" className="submitBut nav-link text-light">
                      Submit
                    </a> */}
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="createAccountForm mb-3 d-flex justify-content-end">
              <p>Already a member?</p>
              <p className="d-block text-center mt-2 small goCreateAccount">
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
