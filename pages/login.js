/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAsterisk } from 'react-icons/fa'
import axios from 'axios'


const login = () => {

  
  const handleLogin = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log(form_values);
  
  
        // Sends data over a server
          try {
            const { data } = await axios({
              url: "/api/auth/login",
              method: "POST",
              data: form_values
              })
              if(data?.status == 200) {
                alert('Loggin In')
              }
          } catch (error) {
              console.log("Error!");
          }
    } 

  
  
  
  


  return (
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-[100vh] flex flex-col'>  
    <form action='/api/auth/login' method='POST'
    className="bg-gray-950/80 px-10 h-[30rem] w-[40%] my-4 rounded-md flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/user-student.png'
            alt='end-user'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Alumni / Student Login!</h1>
        <hr className="border-gray-700 w-[80%] mb-4" />
        
        <div className='w-[80%]'>
        <label htmlFor="email" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email ID <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input type="email" id="email" name="email" required
        placeholder="Enter your email" 
        className="p-2 mb-4 w-full rounded-md bg-gray-800 text-white" />
        </div>
        
        <div className='w-[80%]'>
        <label htmlFor="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input type="password" id="password" name="password" required
        placeholder="Enter your password" 
        className="p-2 mb-4 w-full rounded-md bg-gray-800 text-white" />
        </div>
         
         <p className='text-white self-start mt-2 ml-14'>Not yet registered? - 
          <Link href='/register' className='text-blue-500 ml-2 hover:text-blue-400 underline'>
            Register here!
          </Link>  
          </p>
        {/* GOOGLE Signin */}
        <button type="submit" onSubmit={handleLogin}
        className='bg-purple-950 text-lg text-white w-28 p-2 my-8 rounded-md hover:bg-purple-800 transition-all'>Login!</button>
       
        </form>
    </div>
  )
}

export default login
