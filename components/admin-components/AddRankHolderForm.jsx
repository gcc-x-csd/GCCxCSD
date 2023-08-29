import React from 'react'
import { FaAsterisk, FaUserGraduate } from 'react-icons/fa';




const AddRankHolderForm = () => {

// Function to Handle On Submit
const handleRankHolderSubmit = async (e) => {
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
            Add New Rank Holder!
            </h1>
            <hr class="h-px my-8 mb-12 border-0 bg-gray-700"></hr>
            <form className="space-y-4 md:space-y-6" action="/api/admin/addRankHolders" method='POST'>
                <div>
                    <label htmlFor="fullName" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Full name of rank holder ? <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="text" name="fullName" className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="Enter full name of the rank holder" required />
                </div>
                <div>
                    <label htmlFor="rank" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Rank secured ? <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                   
                <select required name='rank'
                className='p-2.5 my-2 w-[100%] rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600'>
                    <option value="" disabled selected>Choose rank</option>
                    <option value="1st Class First" className='text-white'>1<sup>st</sup> Class First</option>
                    <option value="1st Class Second" className='text-white'>1<sup>st</sup> Class Second</option>
                </select>
          
                </div>
                <div>
                    <label htmlFor="year" className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        In which year ? <FaAsterisk color="red" size={8} className="ml-1" />
                    </label>
                    <input type="tel" name="year" placeholder="Which year ?" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white mb-8" required />
                </div>
               
               
                <button type="submit" onSubmit={handleRankHolderSubmit}
                className="flex gap-2 align-middle justify-center w-full text-white bg-green-700 hover:bg-green-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <FaUserGraduate size={20} color='white' className='self-center' /> <p className='text-md'>Add Rank Holder</p>
                </button>
                
            </form>
        </div>
    </div>

</section>
  )
}

export default AddRankHolderForm;
