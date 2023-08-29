import React, { useState } from 'react'
import { FaAsterisk, FaUserPlus } from 'react-icons/fa'
import { TiWarning } from 'react-icons/ti'
import axios from 'axios';

// Add a async function to check whether the create and confirm password is same or not!


const AddAdminForm = () => {

    const [showAlert, setShowAlert] = useState(false);
  
    const handleNewAdminSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);

            try {                          
                // Sends data over a server
                const { data } = await axios({
                  url: "/api/admin/addNewAdmin",
                  method: "POST",
                  data: form_values
                  })
              } 
              catch (error) {
                  console.log("Error!");
            }

    }
  
      
      
return (
    <>
    <section>
    
    <div className="w-full rounded-xl shadow border bg-gray-900 border-gray-700">
        <div className="p-6  md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Add New Admin!
            </h1>
            <hr class="h-px my-8 mb-12 border-0 bg-gray-700"></hr>
            <form className="space-y-4 md:space-y-6"  action='/api/admin/addNewAdmin' method='POST'>
                <div>
                    <label htmlFor="email" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email ID <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="email" name="email" className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Create password <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="text" name="create_password" placeholder="Create a strong password" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" 
                    required />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Confirm password <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="password" name="confirm_password" placeholder="Confirm your password" className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white mb-8" 
                    required />
                </div>
               
                <button type="submit" onSubmit={handleNewAdminSubmit}
                className="flex gap-2 align-middle justify-center w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <FaUserPlus size={20} color='white' className='self-center' /> <p className='text-md'>Register</p>
                </button>
                
            </form>
        </div>
    </div>

</section>

{showAlert && (
    <div className='absolute top-28 right-[102%] bg-gray-950 border-[1px] border-red-500 w-[30rem] h-[15rem] flex justify-center align-bottom flex-col rounded-xl'>
        <TiWarning size={80} className='text-yellow-600 self-center' />
        <h1 className='text-center font-semibold text-2xl text-red-500'>Password Mismatched!</h1>
        <p className='text-center text-md text-yellow-200'>Please, check and confirm your password carefully!</p>
       
        <button type='button' onClick={() => setShowAlert(false)}
        className='w-[5rem] h-10 mt-6 self-center text-white font-bold text-xl rounded-lg bg-red-600 hover:bg-red-900 hover:border border-red-400'>
            OK
        </button>
    </div>
)}

    </>
  )
}

export default AddAdminForm
