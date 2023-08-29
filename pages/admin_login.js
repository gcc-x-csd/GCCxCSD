import React from 'react'
import Image from 'next/image'
import axios from 'axios'



const admin_login = () => {

  
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
  
          try {
            const { data } = await axios({
              url: "/api/auth/admin_login",
              method: "POST",
              data: form_values
              })
          } catch (error) {
              console.log("Error!");
          }
    } 



  return (
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-[100vh] flex flex-col'>
    
    <form action="/api/auth/admin_login" method="POST" 
    className="bg-gray-950/80 p-10 h-[25rem] w-[40%] my-16 rounded-lg flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/lock.png'
            alt='lock-admin'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Admin Login!</h1>
        
        <input type="email" id="email" name="email" required
        placeholder="Enter email" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" />
        
        <input type="password" id="password" name="password" required
        placeholder="Enter password" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" />
        
        <button type="submit" onSubmit={handleAdminLogin}
        className='bg-purple-950 text-lg text-white w-28 p-2 mt-6 rounded-md hover:bg-purple-800 transition-all'>Login!</button>
    </form>
    </div>
  )
}

export default admin_login
