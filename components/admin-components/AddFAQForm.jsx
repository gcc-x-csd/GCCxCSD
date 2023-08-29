import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { SiAnswer } from 'react-icons/si'
import axios from 'axios';


const AddFAQForm = () => {

// Function to Handle On Submit
const handleFAQSubmit = async (e) => {
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
            Add New FAQ!
            </h1>
            <hr class="h-px my-8 mb-12 border-0 bg-gray-700"></hr>
            <form className="space-y-4 md:space-y-6" action="/api/admin/addFAQs" method='POST'>
                <div>
                    <label htmlFor="faq" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Frequently Asked Question (FAQ) <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="text" name="faq" className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="What is your question?" required />
                </div>
                <div>
                    <label htmlFor="faq_answer" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Answer to FAQ <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <textarea name='faq_answer' rows="6" class="block p-2.5 w-full text-sm rounded-lg shadow-sm border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-primary-500" placeholder="Write your answer..." required></textarea>
                </div>
               
               
                <button type="submit" onSubmit={handleFAQSubmit}
                className="flex gap-2 align-middle justify-center w-full text-white bg-green-700 hover:bg-green-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <SiAnswer size={20} color='white' className='self-center' /> <p className='text-md'>Add Answer</p>
                </button>
                
            </form>
        </div>
    </div>

</section>
  )
}

export default AddFAQForm
