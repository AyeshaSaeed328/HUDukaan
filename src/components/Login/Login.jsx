import React from 'react'
import "./Login.css"
import { useState } from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {




  const validateEmail = (email) => {
    if (!email) {
      return false; // Return false for empty strings or null values
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validatePassword = (pass) => {
    if (!pass) {
      return false; // Return false for empty strings or null values
    }
    return pass.length >= 8;
  }

  

  const [state, setState] = useState("Login");
  const [data, setData] = useState({ username: "", email: "", password: "" })
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    

  }

  const continueHandler = () => {
    if (!data.email) {
      // Display an error message if the email is not entered
      alert('Please enter your email address');
      return;
    }
    if (!data.password) {
      // Display an error message if the password is not entered
      alert('Please enter your password');
      return;
    }
    
    if (!validateEmail(data.email)) {
      // Display an error message if the email is not valid for login
      console.log('Invalid email address');
      return;
    }
    if (!validatePassword(data.password)) {
      // Display an error message if the password is not valid for signup
      console.log('Invalid password');
      return;
    }
    // if (!validateName(data.username)) {
    //   // Display an error message if the password is not valid for signup
    //   console.log('Invalid name');
    //   return;
    // }

    if (state === "Login") {
      // If it's a login or the email is valid, proceed with login or signup
      login(data, false);
    }
    else {
      signup(data, false);
    }



  }


  const login = async (d, google) => {

    console.log("login", d)
    let res;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(d),
    })
      .then((resp) => resp.json())
      .then((d) => { res = d });
    console.log(res);
    if (google) {
      if (res.success) {
        localStorage.setItem('auth-token', res.token);
        window.location.replace("/");
      }
      else {
        signup(d);
      }
    }
    else {


      if (res.success) {
        localStorage.setItem('auth-token', res.token);
        window.location.replace("/");
      }
      else {
        alert(res.errors)
      }
    }
  }

  // const login2 = async (data2) => {

  //   console.log("login", data2)
  //   let res;
  //   await fetch('http://localhost:4000/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/form-data',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data2),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data2) => { res = data2 });
  //   console.log(res);
  //   if (res.success) {
  //     localStorage.setItem('auth-token', res.token);
  //     window.location.replace("/");
  //   }
  //   else {
  //     signup2(data2);
  //   }
  // }

  const signup = async (d) => {
    console.log("signup", d)
    let res;
    await fetch('http://localhost:4000/signup',
      {
        method: "POST",
        headers: {
          Accept: 'application/signup-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(d),

      }).then((response) => response.json()).then((d) => res = d)
    if (res.success) {
      console.log("success")
      localStorage.setItem("auth-token", res.token)
      window.location.replace("/")

    }
    else {
      alert(res.errors);
    }
  }

  // const signup2 = async (data2) => {
  //   console.log("signup", data2)
  //   let res;
  //   await fetch('http://localhost:4000/signup',
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: 'application/signup-data',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data2),

  //     }).then((response) => response.json()).then((data2) => res = data2)
  //   if (res.success) {
  //     console.log("success")
  //     localStorage.setItem("auth-token", res.token)
  //     window.location.replace("/")

  //   }
  //   else {
  //     alert(res.errors);
  //   }
  // }

  return (


    <div className='loginsignup'>
      <div className="loginsignup-container">
        {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={data.username} onChange={changeHandler} type='text' placeholder='Your Name' /> : <></>}
          <input name='email' value={data.email} onChange={changeHandler} type='email' placeholder='Email Address'></input>
          <input name='password' value={data.password} onChange={changeHandler} type='password' placeholder='Password'></input>
        </div>
        {/* <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button> */}
        <button onClick={continueHandler}>Continue</button>

        <GoogleOAuthProvider clientId="479057284793-fifo1peddrupv2pii8h7ciidrp1prb4m.apps.googleusercontent.com">

          <GoogleLogin
            onSuccess={credentialResponse => {
              var decoded = jwtDecode(credentialResponse.credential);
              console.log(decoded);
              const data2 = {
                username: decoded.name,
                email: decoded.email

              }
              login(data2,true);

            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>


        {state === "Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
          : <p className="loginsignup-login">Create an account <span onClick={() => { setState("Sign Up") }}>Sign Up</span></p>}


        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login