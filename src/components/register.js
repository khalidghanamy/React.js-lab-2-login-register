import React, { useState, useEffect } from "react";
import "./register.css";

function Register() {
  const [register, setregister] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    nameError: "",
    userNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleChange = (e) => {
    setregister({
      ...register,
      [e.target.id]: e.target.value,
    });


    emailValidation(e);
    passwordValidation(e);
    nameValidation(e);
    userNameValidation(e);
    confirmPasswordValidation(e)
  };
  const emailValidation = (e) => {
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.id === "email") {
      setRegisterErrors({
        ...registerErrors,
        emailError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 10
            ? "this field must be at least 10"
            : !(regex.test(e.target.value))
            ? " email not valid"
            : null,
      });

      console.log(registerErrors.emailError);
    }
  };

  const nameValidation = (e) => {
    if (e.target.id === "name") {
      setRegisterErrors({
        ...registerErrors,
        nameError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 10
            ? "this field must be at least 10"
            : null,
      });
    }
  };

  const userNameValidation = (e) => {
    if (e.target.id === "userName") {
      setRegisterErrors({
        ...registerErrors,
        userNameError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 10
            ? "this field must be at least 10"
            : null,
      });
    }
  };
  const passwordValidation = (e) => {
    if (e.target.id === "password") {
      setRegisterErrors({
        ...registerErrors,
        passwordError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 8
            ? "this field must be at least 10"
            : null,
      });
    
    }
  };

  const confirmPasswordValidation = (e) => {
    if (e.target.id === "confirmPassword") {
      setRegisterErrors({
        ...registerErrors,
        confirmPasswordError:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 10
            ? "this field must be at least 10"
            : e.target.value === register.password
            ? "password doesnt match"
            : null,
      });
    }
  };
  const formSubmit = (e) => {

    e.preventDefault();
    let formErrors = {};

    for (let data in register)
        if (register[data] === "")
            formErrors[data+"Error"] = `${data} is required`;
          else formErrors[data+"Error"] = "";
            setRegisterErrors({
        ...registerErrors,
        ...formErrors,
    });

    let counter=0;
    for( let key in registerErrors){

      registerErrors[key]?.length > 0 && counter++

    }

    counter > 0 ? alert(" please check your data") : console.log(registerErrors);
   
  };

  return (
    <>
      <div className="registerForm d-flex  justify-content-center align-items-center text-center mt-5">
        <form className=" card-form " onSubmit={(e) => formSubmit(e)}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={register.name}
                onChange={(e) => handleChange(e)}
              />
              {registerErrors.nameError && (
                <div id="error" className="form-text text-danger">
                
                  {registerErrors.nameError}
                </div>
              )}
            </div>
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={register.email}
                onChange={(e) => handleChange(e)}
              />

              {registerErrors.emailError && (
                <div id="error" className="form-text text-danger">
                
                  {registerErrors.emailError}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                user name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={register.userName}
                onChange={(e) => handleChange(e)}
              />
              {registerErrors.userNameError && (
                <div id="error" className="form-text text-danger">
                  
                  {registerErrors.userNameError}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={register.password}
                onChange={(e) => handleChange(e)}
              />

              {registerErrors.passwordError && (
                <div id="error" className="form-text text-danger">
                  {registerErrors.passwordError}
                </div>
              )}

            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
confirm password              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={register.confirmPassword}
                onChange={(e) => handleChange(e)}
              />

              {registerErrors.confirmPasswordError && (
                <div id="error" className="form-text text-danger">
                
                  {registerErrors.confirmPasswordError}
                </div>
              )}

            </div>

            <button type="submit" className="btn w-100 btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
