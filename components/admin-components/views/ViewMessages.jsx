import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';

const ViewMessages = ({ user_message_DB }) => {
  const deleteEvent = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    // Sends data over a server
    try {
      const { data } = await axios({
        url: "/api/admin/deleteMessages",
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
    <thead className="text-md text-white uppercase bg-yellow-700">
        <tr>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide min-w-[8rem]">
                Name
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide min-w-[8rem]">
                Email
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide min-w-[20rem]">
                Message
            </th>
           
            <th scope="col" className="px-4 py-3 border border-gray-700">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
    <tbody>
        {
            user_message_DB.map((user) => (
            <tr key={user._id} className="bg-gray-900">
            <th scope="row" className="px-6 py-2 border border-gray-700 font-medium whitespace-nowrap text-white">
                {user.fullname}
            </th>
            <td className="px-6 py-2  border border-gray-700">
                {user.email}
            </td>
            <td className="px-6 py-2  border border-gray-700">
                {user.message}
            </td>
            
           
            <td className="px-2 py-2 border border-gray-700 text-center">
            <form>
                <input type="text" name='u_name' value={user.fullname} className='bg-transparent w-0' />
                <input type="email" name='u_email' value={user.email} className='bg-transparent w-0' />
                <button type='submit' formAction="/api/admin/deleteMessages" formMethod="POST"  onSubmit={deleteEvent}>
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

export default ViewMessages
