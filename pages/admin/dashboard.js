import React, { useState } from "react";
import mongoose from "mongoose";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import PendingRQST from "@/model/PendingRQST";
import AccessCodes from "@/model/AccessCode";
import VerifiedAlumni from "@/model/VerifiedAlumni";
import UpcomingEvents from "@/model/UpcomingEvents";
import Admin from "@/model/Admin"
import UserMessages from "@/model/UserMessages";
import RankHolder from "@/model/RankHolder";
import EventTimeLine from "@/model/EventTimeline";
import FAQ from "@/model/FAQ";


import { SelectAction, ViewAccessCodes, ViewPendingRQST, ViewVerifiedAlumni, Overview } from "@/components";

import { GoSignOut } from 'react-icons/go'
import { RxSlash } from 'react-icons/rx'
import { FaChartPie } from 'react-icons/fa'





const dashboard = ({ pending_registration_rqsts, verified_alumni, access_codes, 
  admin, upcoming_events, user_messages, faq, event_history, ranker_holders }) => {

// eslint-disable-next-line react-hooks/rules-of-hooks
  const [displayOverview, setDisplayOverview] = useState(false)

  const handleOverviewClick = () => {
      setDisplayOverview(!displayOverview);
  }


  const handleAdminLogout = async (e) => {
    e.preventDefault();
   
  
          try {
            const { data } = await axios({
              url: "/api/auth/admin_logout",
              method: "POST",
              })
          } catch (error) {
              console.log("Error!");
          }
    } 




return (
  <div className="bg-gradient-to-br from-black via-indigo-950 to-sky-950 w-full">
   
   
   <nav className="absolute top-0 z-40 flex items-center w-full">
      <div className="w-full">
        <div className="shadow-md bg-gradient-to-r from-black to-indigo-950 fixed w-full">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
                <Link href="/admin/dashboard" className="flex items-center">
                  <Image 
                  alt="GCCxCSD Logo" 
                  src='/logo.png'
                  width={40}
                  height={40} 
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex">
                    GCC<span className='text-red-600 font-bold mb-1'>x</span>CSD
                    <RxSlash size={30} color="gray" />
                    <h2 className="text-gray-600">Admin Dashboard</h2>
                  </span>
                </Link>
            </div>

      <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <button type="button" className="flex items-center justify-center px-4 py-2 text-md font-semibold text-white rounded-lg bg-blue-700 hover:bg-blue-800" onClick={handleOverviewClick}>
          <FaChartPie size={24} className="text-white mr-2" /> 
          Overview
        </button>
         
          {/* <div className="flex items-center w-full md:w-auto">
              <SelectAction />
          </div> */}
        <div className="flex items-center w-full md:w-[370px]">
          <SelectAction />
        </div>

        <form action="/api/auth/admin_logout" method="POST">
        <button type="submit" onSubmit={handleAdminLogout}  className="flex items-center justify-center px-4 py-2 text-md text-white rounded-lg bg-red-700 hover:bg-red-800">
          <GoSignOut size={24} className="text-white mr-2 self-center" />
          Log out
        </button>
        </form>
        
      </div>
    </div>
  </div>
  </div>  
</nav>


{displayOverview && (
  <Overview 
  pending_request_DB={pending_registration_rqsts}
  verified_alumni_DB={verified_alumni}
  access_code_DB={access_codes}
  admin_DB={admin}
  UpcomingEvents_DB={upcoming_events}
  faq_db={faq}
  rank_holders_db={ranker_holders}
  event_history_db={event_history}
  user_messages_db={user_messages}
  />
)}

{pending_registration_rqsts.length > 0 && (
<div className="flex justify-center flex-col px-8 w-[100%] right-0 pt-16">
  <h1 className="text-5xl font-extrabold text-emerald-400">Pending Registration Request</h1>
  <p className="text-gray-400 ml-2 text-base">Here is the list of all pending registration requests.</p>
  <ViewPendingRQST pending_RQST_DBName={pending_registration_rqsts} />
</div>
)}


<div className="flex justify-center flex-col px-8 w-[100%] right-0 pt-16">
  <h1 className="text-5xl font-extrabold text-emerald-400">Verified Alumni</h1>
  <p className="text-gray-400 ml-2 text-base">Here is the list of all verified alumni of the Department of Computer Science - Gurucharan College, Silchar.</p>
  <ViewVerifiedAlumni verified_Alumni_DB={verified_alumni} />
</div>

    </div>
  );
};

export async function getServerSideProps() {
 
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }
  let pending_registration_rqsts = await PendingRQST.find();
  let access_codes = await AccessCodes.find();
  let verified_alumni = await VerifiedAlumni.find();
  let admin = await Admin.find();
  let upcoming_events = await UpcomingEvents.find();
  let messages = await UserMessages.find();
  let ranker_holders = await RankHolder.find();
  let event_history = await EventTimeLine.find();
  let frequently_asked_question = await FAQ.find(); 

  // These will be passed to the page component as props
  return {
    props: {
      pending_registration_rqsts: JSON.parse(JSON.stringify(pending_registration_rqsts)),
      access_codes: JSON.parse(JSON.stringify(access_codes)),
      verified_alumni: JSON.parse(JSON.stringify(verified_alumni)),
      admin: JSON.parse(JSON.stringify(admin)),
      upcoming_events: JSON.parse(JSON.stringify(upcoming_events)),
      user_messages: JSON.parse(JSON.stringify(messages)),
      ranker_holders: JSON.parse(JSON.stringify(ranker_holders)),
      event_history: JSON.parse(JSON.stringify(event_history)),
      faq: JSON.parse(JSON.stringify(frequently_asked_question)),
    }, 
  };
}

export default dashboard;
