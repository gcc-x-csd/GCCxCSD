import React from 'react'
import { CgAsterisk } from 'react-icons/cg'
import { IoIosPaperPlane } from 'react-icons/io'
import axios from 'axios'




const ContactForm = () => {

   
const handleSubmit = async (e) => {
  e.preventDefault();
  var formData = new FormData(e.target);
  const form_values = Object.fromEntries(formData);
  console.log(form_values);
      try {
          const { data } = await axios({
            url: "/api/addUserMessages",
            method: "POST",
            data: form_values
            })
        } catch (error) {
            console.log("Error!");
        } 
}




  return (
    <div>
      <section className="bg-gray-950/70 py-20 ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-white">Contact us!</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about our features? <br /> Let us know.</p>
      
      <form action="/api/addUserMessages" method='POST' className="space-y-8 bg-gray-950/80 py-20 px-10 rounded-xl">
          <div className='flex justify-center gap-8'>
            <div className='flex flex-col w-full'>
              <label htmlFor="fullName" className="flex mb-2 text-lg font-semibold text-gray-400">
                Fullname <CgAsterisk size={14} color='red' />
              </label>
              <input type="text" name="fullName" className="shadow-sm border-2 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Enter your full name here!" required />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor="email" className="flex mb-2 text-lg font-semibold text-gray-400">
                Email <CgAsterisk size={14} color='red' />
              </label>
              <input type="email" name="email" className="shadow-sm border-2 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="Enter your email address here!" required />
            </div>
                
          </div>
          
          <div className="sm:col-span-2">
              <label htmlFor="message" className="flex mb-2 text-lg font-semibold text-gray-400">
                Leave your message here! <CgAsterisk size={16} color='red' />
              </label>
              <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" onSubmit={handleSubmit}
           className="flex align-middle py-3 px-5 text-md font-semibold text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            Send message <IoIosPaperPlane size={20} className='text-white ml-1' /> 
          </button>
      </form>
  </div>
</section>
    </div>
  )
}

export default ContactForm
