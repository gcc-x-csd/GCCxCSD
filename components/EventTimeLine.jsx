import React from 'react'
import Link from 'next/link'
import mongoose from "mongoose";
import { MdOutlinePendingActions } from 'react-icons/md'
import { HiStar } from 'react-icons/hi'
import { BsFillEmojiFrownFill } from 'react-icons/bs'


import UpcomingEvents from '@/model/UpcomingEvents'


const EventTimeLine = ({ UpcomingEvents_DB }) => {

  
  return (
    <div className='max-w-2xl'>

<ol className="relative border-l border-gray-200 dark:border-gray-700">       

{/* For handling an exception when there is no upcoming events in the Database */}
    {UpcomingEvents_DB.length == 0 && ( 
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6 ring-8 ring-red-900/50 bg-red-700">
              <BsFillEmojiFrownFill size={35} className='text-yellow-300' />
          </span>
          <h3 className="mb-4 ml-6 pt-2 text-3xl font-bold text-yellow-300">Ooopps!</h3>
          <h3 className="mb-4 ml-6 pt-2 text-2xl font-semibold text-white">Seems like, currently there is no upcoming events :) </h3>
          <p className="ml-6 mb-2 text-base font-normal text-gray-400">Check this section frequently for latest updates on events!</p>
        </li>
      )
    }

{/* For handling an exception when there is only one upcoming event in the Database */}
    {UpcomingEvents_DB.length >= 1 && (
        <li className="mb-10 ml-6">            
        <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-emerald-950 bg-emerald-600">
        <HiStar color='white' size={20} />
        </span>
        <h3 className="flex items-center mb-1 ml-4 text-lg font-semibold text-white">{UpcomingEvents_DB[0].topic}<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-emerald-700 dark:text-white ml-3">Latest</span></h3>
        
        <time className="ml-4 block mb-1 text-sm font-normal leading-none text-emerald-400">
          Event on {UpcomingEvents_DB[0].day} {UpcomingEvents_DB[0].month}, {UpcomingEvents_DB[0].year} at {UpcomingEvents_DB[0].hour}:{UpcomingEvents_DB[0].minute ? `${UpcomingEvents_DB[0].minute}` : `00` } {UpcomingEvents_DB[0].am_pm} 
        </time>

        <p className="ml-4 mb-2 text-sm font-normal text-gray-300">By {UpcomingEvents_DB[0].speaker}</p>
        <p className="ml-4 mb-4 text-sm font-normal text-gray-500">{UpcomingEvents_DB[0].description}</p>

                  {UpcomingEvents_DB[0].gmeet_url.length > 0 ? (
                    <Link href={UpcomingEvents_DB[0].gmeet_url} target='_blank'>
                      <button type='button' className={`ml-4  inline-flex items-center px-4 py-2 text-sm font-medium  rounded-lg tracking-wider focus:z-10 bg-blue-700 hover:bg-blue-800 text-white`}>
                          Join!
                      </button>
                    </Link>
                    ) : (
                      <button type='button' disabled className={`ml-4 disabled:bg-gray-700 cursor-not-allowed inline-flex items-center px-4 py-2 text-sm tracking-wider font-medium rounded-lg focus:z-10 text-white`}>
                          Offline Event!
                      </button>
                    )
                  }

        </li>
      )
    }


{/* For handling an exception when there is only one upcoming event in the Database*/}
    {UpcomingEvents_DB.length >= 2 && ( 
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-yellow-900/50 bg-yellow-700">
              <MdOutlinePendingActions color='white' size={20} />
          </span>
          <h3 className="mb-1 ml-4 text-lg font-semibold text-gray-400">{UpcomingEvents_DB[1].topic}</h3>
          <time className="ml-4 block mb-2 text-sm font-normal leading-none text-yellow-700">
          Event on {UpcomingEvents_DB[1].day} {UpcomingEvents_DB[1].month}, {UpcomingEvents_DB[1].year} at {UpcomingEvents_DB[1].hour}:{UpcomingEvents_DB[1].minute ? `${UpcomingEvents_DB[1].minute}` : `00` } {UpcomingEvents_DB[1].am_pm} 
          </time>
          <p className="ml-4 mb-2 text-sm font-normal text-gray-400">By {UpcomingEvents_DB[1].speaker}</p>
          <p className="ml-4 mb-4 text-sm font-normal text-gray-600">{UpcomingEvents_DB[1].description}</p>
        </li>
      )
    }
{/* For handling an exception when there is only two upcoming event in the Database*/}
    {UpcomingEvents_DB.length >= 3 && (
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-yellow-950/50  bg-yellow-900">
              <MdOutlinePendingActions color='white' size={20} />
          </span>
          <h3 className="mb-1 ml-4 text-lg font-semibold text-gray-500">{UpcomingEvents_DB[2].topic}</h3>
          <time className="ml-4 block mb-2 text-sm font-normal leading-none text-yellow-800">
          Event on {UpcomingEvents_DB[2].day} {UpcomingEvents_DB[2].month}, {UpcomingEvents_DB[2].year} at {UpcomingEvents_DB[2].hour}:{UpcomingEvents_DB[2].minute ? `${UpcomingEvents_DB[2].minute}` : `00` } {UpcomingEvents_DB[2].am_pm} 
          </time>
          <p className="ml-4 mb-2 text-sm font-normal text-gray-500">By {UpcomingEvents_DB[2].speaker}</p>
          <p className="ml-4 text-sm font-normal text-gray-700">{UpcomingEvents_DB[2].description}</p>
        </li> 
    )
    }
</ol>

    <Link href='/eventhistorytimeline'>
      <button type='button' className={`ml-10  inline-flex items-center px-4 py-2 text-sm font-medium  rounded-lg tracking-wider focus:z-10 bg-purple-700 hover:bg-purple-800 text-white`}>See event history timeline</button>
    </Link>
      
    </div>
  )
}




export async function getServerSideProps() {
 
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_DB_URI);
    }
  
    let upcoming_events = await UpcomingEvents.find();
  
    // These will be passed to the page component as props
    return {
      props: {
        upcoming_events: JSON.parse(JSON.stringify(upcoming_events)),
      }, 
    };
  }


export default EventTimeLine
