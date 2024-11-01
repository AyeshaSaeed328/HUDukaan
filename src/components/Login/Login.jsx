import React from 'react'
import "./Login.css"
import { useState } from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [state, setState] = useState("Login");
  const [data, setData] = useState({ username: "", email: "", password: "" });

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pass) => pass && pass.length >= 8;

  const continueHandler = () => {
    if (!validateEmail(data.email) || !validatePassword(data.password)) {
      alert("Invalid email or password.");
      return;
    }
    state === "Login" ? login(data, false) : signup(data, false);
  };

  const login = async (d, google) => {
    let res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(d),
    }).then(resp => resp.json());

    if (res.success) {
      localStorage.setItem('auth-token', res.token);
      window.location.replace("/");
    } else if (google) {
      signup(d);
    } else {
      alert(res.errors);
    }
  };

  const signup = async (d) => {
    let res = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(d),
    }).then(resp => resp.json());

    if (res.success) {
      localStorage.setItem("auth-token", res.token);
      window.location.replace("/");
    } else {
      alert(res.errors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">{state}</h1>
        <div className="space-y-4">
          {state === "Sign Up" && (
            <input
              name="username"
              value={data.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
          <input
            name="email"
            value={data.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            value={data.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={continueHandler}
          className="mt-4 w-full py-2 bg-customPurple text-white rounded-md hover:bg-purple-700 transition"
        >
          Continue
        </button>
        <GoogleOAuthProvider clientId="479057284793-fifo1peddrupv2pii8h7ciidrp1prb4m.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              login({ username: decoded.name, email: decoded.email }, true);
            }}
            onError={() => console.log('Login Failed')}
            className="mt-4 w-full"
          />
        </GoogleOAuthProvider>
        <p className="text-center mt-6 text-gray-600">
          {state === "Sign Up" ? (
            <>Already have an account? <span className="text-customPurple cursor-pointer" onClick={() => setState("Login")}>Login Here</span></>
          ) : (
            <>Create an account <span className="text-customPurple cursor-pointer" onClick={() => setState("Sign Up")}>Sign Up</span></>
          )}
        </p>
        <div className="mt-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <p className="text-gray-600 text-sm">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;