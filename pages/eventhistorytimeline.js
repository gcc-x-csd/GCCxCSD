import React from 'react'
import EventTimeline from '@/model/EventTimeline';
import mongoose from 'mongoose';
import { BsFillEmojiFrownFill } from 'react-icons/bs'
import { MdOutlineEventAvailable } from 'react-icons/md'


const eventhistorytimeline = ({ event_history_timeline }) => {
  return (
    <div className='w-full bg-gradient-to-br from-black via-violet-950 to-indigo-950'>
        <div className='flex justify-around flex-wrap px-4'>
            <div className=' max-w-2xl w-full py-8 mb-20'>
                <h1 className='text-5xl font-extrabold text-white mb-4 mt-4'>Events history timeline.</h1>
                <p className='text-gray-500 text-lg font-medium mb-20'>In this page, you will find all the information regarding past events that were organized.</p>
                
<ol className="relative border-l-2 border-gray-600">       

{/* For handling an exception when there is no upcoming events in the Database */}
    {event_history_timeline.length == 0 && ( 
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-red-900/50 bg-red-700">
              <BsFillEmojiFrownFill size={35} className='text-yellow-300' />
          </span>
          <h3 className="mb-2 ml-6 pt-2 text-3xl font-bold text-yellow-300">Ooopps!</h3>
          <h3 className="mb-2 ml-6 pt-2 text-2xl font-semibold text-white">Seems like, there is no events history :) </h3>
          <p className="ml-6 mb-2 text-base font-normal text-gray-400">Visit this page frequently, it will be updated soon!</p>
        </li>
      )
    }

{/* For handling an exception when there is only one upcoming event in the Database*/}
    {event_history_timeline.length >= 1 && ( 
      
      <div>
          {event_history_timeline.reverse().map((events) => (
            <>
            <li className="pb-12 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-yellow-900/50 bg-yellow-700">
              <MdOutlineEventAvailable color='white' size={20} />
              </span>
                <h3 className="mb-1 ml-4 text-lg font-semibold text-gray-100">{events.topic}</h3>
                <time className="ml-4 block mb-2 text-sm font-normal leading-none text-yellow-600">
                    Event was on {events.day} {events.month}, {events.year} at {events.hour}:{events.minute ? `${events.minute}` : `00` } {events.am_pm} 
                </time>
                <p className="ml-4 mb-2 text-sm font-normal text-gray-300">By {events.speaker}</p>
                <p className="ml-4 mb-4 text-sm font-normal text-gray-400">{events.description}</p>
              </li>
            </>
          ))

          }
        </div>
      )
    }

   
                </ol>

            </div>  
        </div>
    </div>
  )
}

export async function getServerSideProps() {
 
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_DB_URI);
    }
  
    let event_history_timeline =  await EventTimeline.find();
  
    // These will be passed to the page component as props
    return {
      props: {
        event_history_timeline: JSON.parse(JSON.stringify(event_history_timeline)),
      }, 
    };
  }


export default eventhistorytimeline
