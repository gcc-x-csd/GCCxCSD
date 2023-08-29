import React, { useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { HiOutlineSaveAs } from 'react-icons/hi'
import { TbQrcode } from 'react-icons/tb'
import axios from 'axios';




const AddAccessCodes = () => {

// Function to generate random access codes
    const generateAccessCode = (length) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 1; i <= length; i++ ) {
            if(i % 5 == 0 && i != length){
                result+= '-'
            } else {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
      return result;
    }
const [accessCode, setAccessCode] = useState();



// Function to Handle On Submit
const handleAccessCodeSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log(form_values);
  
        // Sends data over a server
          try {
            const { data } = await axios({
              url: "/api/admin/addAccessCodes",
              method: "POST",
              data: form_values
              })
          } catch (error) {
              console.log("Error!");
          }
}
  

return (
    <section>
    
    <div className="w-full rounded-xl shadow border bg-gray-900 border-gray-700">
        <div className="p-6  md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Generate New Access Code!
            </h1>
            <hr class="h-px my-8 mb-12 border-0 bg-gray-700"></hr>
            <form className="space-y-4 md:space-y-6" action="/api/admin/addAccessCodes" method='POST'>
                <div>
                    <label htmlFor="access_code" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        New Access Code <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="text" name="access_code" value={accessCode} minLength={19} maxLength={20}
                    className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="Access Code" required />
                </div>
              

                <button type="button" onClick={() => setAccessCode(generateAccessCode(19))}
                className="flex gap-2 align-middle justify-center w-full text-white bg-violet-700 hover:bg-violet-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <TbQrcode size={20} color='white' className='self-center' /> <p className='text-md'>Generate Access Code</p>
                </button>
               
               
                <button type="submit" onSubmit={handleAccessCodeSubmit}
                className="flex gap-2 align-middle justify-center w-full text-white bg-green-700 hover:bg-green-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <HiOutlineSaveAs size={20} color='white' className='self-center' /> <p className='text-md'>Save This Access Code</p>
                </button>
                
            </form>
        </div>
    </div>

</section>
  )
}

export default AddAccessCodes
