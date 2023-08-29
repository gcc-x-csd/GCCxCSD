import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios';

const ManageFAQ = ({ faq_DB }) => {
    const deleteEvent = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
    
        // Sends data over a server
        try {
          const { data } = await axios({
            url: "/api/admin/deleteFAQs",
            method: "POST",
            data: form_values,
          });
        } catch (error) {
          console.log("Error!");
        }
      };


  return (
    
<div className="relative overflow-x-auto  border border-gray-700 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-md text-white uppercase bg-green-700">
            <tr>
                <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide min-w-[20rem]">
                    Questions
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                    Answers
                </th>
               
                <th scope="col" className="px-4 py-3 border border-gray-700">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                faq_DB.map((info) => (
                <tr key={info._id} className="bg-gray-900">
                <th scope="row" className="px-6 py-2 border border-gray-700 font-medium whitespace-nowrap text-white">
                    {info.question}
                </th>
                <td className="px-6 py-2  border border-gray-700">
                    {info.answer}
                </td>
                
               
                <td className="px-2 py-2 border border-gray-700 text-center">
                <form>
                    <input type="text" name='question' value={info.question} className='bg-transparent w-0' />
                    <button type='submit' formAction="/api/admin/deleteFAQs" formMethod="POST"  onSubmit={deleteEvent}>
                            <MdDeleteForever size={24} className='text-red-400 hover:text-red-600' />
                    </button>
                </form>
                </td>
            </tr>
                ))
            }
        </tbody>
    </table>
</div>

  )
}

export default ManageFAQ
