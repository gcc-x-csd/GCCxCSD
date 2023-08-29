import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';

const ViewEventsHistory = ({ event_history_timeline }) => {
  
const deleteEvent = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    try {
      const { data } = await axios({
        url: "/api/deleteEventHistory",
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
    <thead className="text-md text-white uppercase bg-orange-700">
        <tr>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Event Topic
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Speaker
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Date
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-700 tracking-wide">
                Time
            </th>
            <th scope="col" className="px-4 py-3 border border-gray-700">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
    <tbody>
        {
            event_history_timeline.map((events) => (
            <tr key={events._id} className="bg-gray-900">
            <th scope="row" className="px-6 py-2 border border-gray-700 font-medium whitespace-nowrap text-white">
                {events.topic}
            </th>
            <td className="px-6 py-2  border border-gray-700">
                {events.speaker}
            </td>
            <td className="px-6 py-2 border border-gray-700">
                {events.day} - {events.month}, {events.year}
            </td>
            <td className="px-6 py-2 border border-gray-700">
                {events.hour}:{events.minute ? `${events.minute}` : `00` } {events.am_pm}
            </td>
           
            <td className="px-2 py-2 border border-gray-700 text-center">
            <form>
                <input type="text" name='topic' value={events.topic} className='bg-transparent w-0' />
                <button type='submit' formAction="/api/deleteEventHistory" formMethod="POST"  onSubmit={deleteEvent}>
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

export default ViewEventsHistory
