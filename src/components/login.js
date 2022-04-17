import React, { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    emailError: null,
    passwordError: null,
  });
  
  const handleChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
    
    emailValidation(e)
    passwordValidation(e)
    
  };
  
  const emailValidation = (e) => {
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(e.target.id === 'email'){
          setLoginErrors({
              ...loginErrors,
              emailError:
              e.target.value.length === 0 
              ? 'this field is required'
              : e.target.value.length < 10
              ? 'this field must be at least 10'
              : !(regex.test(e.target.value))
              ? " email not valid"
              :null,
          })

          console.log(loginErrors.emailError);
      }
  }
  const passwordValidation = (e) => {
   
    if(e.target.id === 'password'){
        setLoginErrors({
            ...loginErrors,
            passwordError:
            e.target.value.length === 0 
            ? 'this field is required'
            : e.target.value.length < 8
            ? 'this field must be at least 10'
           
            :null,
        })
       
    }
}
  const formSubmit = (e) => {
    
      e.preventDefault();
      let formErrors = {};

      for (let data in loginData)
          if (loginData[data] === "")
              formErrors[data+"Error"] = `${data} is required`;
            else formErrors[data+"Error"] = "";
              setLoginErrors({
          ...loginErrors,
          ...formErrors,
      });
  
      let counter=0;
      for( let key in loginErrors){
  
        loginErrors[key]?.length > 0 && counter++
  
      }
  
      counter > 0 ? alert(" please check your data") : console.log(loginErrors);
     
   
  };



  return (
    <>
      <div className="loginForm d-flex  justify-content-center align-items-center text-center mt-5">
        <form className=" card-form  " onSubmit={(e)=>formSubmit(e)}>
          <div className="card-body">
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={loginData.email}
                onChange={(e)=>handleChange(e)}
              />

              {loginErrors.emailError && 
               ( <div id="error" className="form-text text-danger"> {loginErrors.emailError}</div>)
              }
             
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={loginData.password}
                onChange={(e)=>handleChange(e)}
              />

              {loginErrors.passwordError && 
                (<div id="error" className="form-text text-danger">
                  {loginErrors.passwordError}
                </div>)
              }
              
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

export default Login;
