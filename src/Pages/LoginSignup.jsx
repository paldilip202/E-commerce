// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'

// export default function LoginSignup() {

//   const [state,setState] = useState("Login");

//   const [formData,setFormData] = useState({
//     username:"",
//     password:"",
//     email:""
//   })

//   const changeHandler = (e) =>{
//     setFormData({...formData,[e.target.name]: e.target.value})
//   }

  

//   const login = async() =>{
//     console.log("Login function Executed",formData);
//     let responseData;

//     await fetch('http://localhost:4000/login',{
//       method:'POST',
//       headers:{
//         Accept:'application/json',
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData)
//     }).then((response) => response.json()).then((data) => responseData = data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);

//       window.location.replace('/');
//     }else{
//       alert(responseData.errors);
//     }
//   }

//   const signup = async() =>{
//     console.log("Sign up function executed",formData);
//     let responseData;
    

//     await fetch('http://localhost:4000/signup',{
//       method:'POST',
//       headers:{
//         Accept:'application/json',
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData)
//     }).then((response) => response.json()).then((data) => responseData = data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);

//       window.location.replace('/');
//     }else{
//       alert(responseData.errors);
//     }
//   }

//   return (
//     <div className='loginsignup'>
//       <div className='loginsignup-container'>
//         <h1>{state}</h1>
//         <div className='loginsignup-fields'>
//           {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='YOUR NAME' /> :<></>} 
//           <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address'  />
//           <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
//         </div>
//         <button onClick={ () =>{state === "Login"?login():signup()}}>Continue</button>


//         {state === "Sign Up"?<p className='loginsignup-login'>
//           Already have an account <span onClick={ () =>{setState("Login")}}>Login here </span>
//         </p>:<p className='loginsignup-login'>
//           Create an account <span onClick={ () =>{setState("Sign Up")}}>Click here </span>
//         </p>}
        

//         <div className='loginsignup-agree'>
//           <input type='checkbox' name='' id='' />
//           <p>By Continuing, I Agree to the term of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import './CSS/LoginSignup.css';

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation logic
    if (name === 'username') {
      if (value.length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Invalid email address.';
      }
    } else if (name === 'password') {
      if (value.length < 6) {
        errorMessage = 'Password must be at least 6 characters long.';
      }
    }

    // Update form data and error message
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
  };

  const authenticate = async (endpoint) => {
    console.log(`${state} function executed`, formData);
    try {
      const response = await fetch(`http://localhost:4000/${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === "Sign Up" ? (
            <>
              <input
                name='username'
                value={formData.username}
                onChange={changeHandler}
                type='text'
                placeholder='YOUR NAME'
              />
              {errors.username && <p className='error-message'>{errors.username}</p>}
            </>
          ) : null}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Email Address'
          />
          {errors.email && <p className='error-message'>{errors.email}</p>}
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
          {errors.password && <p className='error-message'>{errors.password}</p>}
        </div>
        <button onClick={() => authenticate(state.toLowerCase())}>Continue</button>

        <p className='loginsignup-login'>
          {state === "Sign Up" ? 'Already have an account' : 'Create an account'} <span onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}>{state === "Sign Up" ? 'Login here' : 'Click here'}</span>
        </p>

        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By Continuing, I Agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

