import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';

const ViewAlumni = ({ alumni_DB }) => {
 
  const deleteEvent = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    // Sends data over a server
    try {
      const { data } = await axios({
        url: "/api/deleteAlumni",
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
                Name
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Email
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Phone
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Batch
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Current Occupation
            </th>
            <th scope="col" className="px-4 py-3 border border-gray-700">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
    <tbody>
        {
            alumni_DB.map((user) => (
            <tr key={user._id} className="bg-gray-900">
            <th scope="row" className="px-6 py-2 border border-gray-700 font-medium whitespace-nowrap text-white">
                {user.name}
            </th>
            <td className="px-6 py-2  border border-gray-700">
                {user.email}
            </td>
            <td className="px-6 py-2 border border-gray-700">
                {user.mobile_no}
            </td>
            <td className="px-6 py-2 border border-gray-700">
                {user.admission_year} - {user.passing_year}
            </td>
            <td className="px-6 py-2 border border-gray-700">
                {user.current_occupation}
            </td>
           
            <td className="px-2 py-2 border border-gray-700 text-center">
            <form>
                <input type="email" name='email' value={user.email} className='bg-transparent w-0' />
                <input type="tel" name='phone' value={user.mobile_no} className='bg-transparent w-0' />
                <button type='submit' formAction="/api/deleteAlumni" formMethod="POST"  onSubmit={deleteEvent}>
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

export default ViewAlumni
