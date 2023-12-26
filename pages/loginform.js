import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import axios from 'axios';
import { useAuth } from './utils/authcontext';
import Link from "next/link"
import Footer from './Layout/footer';
 
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})
 
 
export default function Login(){
 
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
 
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
 
  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
   return emailPattern.test(email);
    };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      setError('Email and password are required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else {
      const res = await doSignIn(email, password)
      console.log(res);
    }
  };
 
  async function doSignIn(email, password) {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/employee/signin/', {
        email,
        password,
      },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        }
      );
 
      if (response.data.success == true) {
        console.log("cookie: " + document.cookie);
        login(email, document.cookie);
        router.push('/Employeedashboard/profileEmployee');
      }
      else {
        setError("Invalid user");
      }
 
      console.log("response: " + response)
 
      console.log(response.data)
      return response.data;
 
    } catch (error) {
 
      console.error('Login failed:', error);
    }
  }
 
 
    return(
        <>
 
<Title page="Login"> </Title>
         <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-purple-500">Login</h1>
      <br></br>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          {error && <p color='red'>{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p>Don't have an account?<Link className="text-blue-600 hover:text-blue-800 hover:underline" href="registrationform"> Register </Link></p>
        <div className="flex justify-center">
          <Link className="text-blue-600 hover:text-blue-800 hover:underline" href="/">Home</Link>
        </div>
      </div>
    </div>
 
    <Footer/>
        </>
    )
}