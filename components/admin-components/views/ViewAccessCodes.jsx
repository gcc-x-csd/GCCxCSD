import React from 'react'
import axios from 'axios'
import { MdDeleteForever } from 'react-icons/md'

const ViewAccessCodes = ({ ProtectedView_DB }) => {

    const deleteAccessCode = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
    
        // Sends data over a server
        try {
          const { data } = await axios({
            url: "/api/admin/deleteAccessCodes",
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
        <thead className="text-md text-white uppercase bg-purple-800">
            <tr>
                <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                    Generated Access Codes
                </th>
               
                <th scope="col" className="px-4 py-3 border border-gray-700">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                ProtectedView_DB.map((user) => (
                <tr key={user._id} className="bg-gray-900">
                <th scope="row" className="px-6 py-2 border border-gray-700 font-medium whitespace-nowrap tracking-widest text-white">
                    {user.access_code}
                </th>
               
                <td className="px-2 py-2 border border-gray-700 text-center">
                <form>
                    <input type="text" name='accessCode' value={user.access_code} className='bg-transparent w-0' />
                    <button type='submit' formAction="/api/admin/deleteAccessCodes" formMethod="POST"  onSubmit={deleteAccessCode}>
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

export default ViewAccessCodes
