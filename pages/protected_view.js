import React from 'react'
import Image from 'next/image'
import axios from 'axios'

const protected_view = () => {    
  const handleAccessCode = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log(form_values);
    
        // Sends data over a server
          try {
            const { data } = await axios({
              url: "/api/auth/accesscode",
              method: "POST",
              data: form_values
              })
          } catch (error) {
              console.log("Error!");
          }
    } 

  return (
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-[100vh] flex flex-col'>  
    <form action="/api/auth/accesscode" method="POST" 
    className="bg-gray-950/80 p-10 h-[25rem] w-[40%] my-16 rounded-md flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/protected.png'
            alt='protected-view'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Protected View!</h1>
        
        <input type="text" id="access-code" name="accessCode" required
        placeholder="Enter authorized access code" 
        className="p-3 my-4 w-[80%] rounded-md bg-gray-800 text-white text-lg" />
        
        <button type="submit" onSubmit={handleAccessCode}
        className='bg-purple-950 text-lg text-white w-32 p-2 mt-8 rounded-md hover:bg-purple-800 transition-all'>Get Access!</button>
    </form>
    </div>
  )
}

export default protected_view
