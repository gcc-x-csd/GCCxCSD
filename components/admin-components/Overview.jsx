import React, { useState } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { ManageUpcomingEvents, ViewAccessCodes, 
      ManageFAQ, ViewMessages, ViewRankHolders, 
      ViewEventsHistory, ViewAdmin, ViewAdmins, ViewAlumni } from '@/components'


const Overview = ({ pending_request_DB, verified_alumni_DB, access_code_DB, admin_DB, UpcomingEvents_DB,
faq_db, rank_holders_db, event_history_db, user_messages_db }) => {

      const [viewEvents, setViewEvents] = useState(false)
      const [viewEventsHistory, setViewEventsHistory] = useState(false)
      const [viewPendingRQST, setViewPendingRQST] = useState(false)
      const [viewRegisteredAdmin, setViewRegisteredAdmin] = useState(false)
      const [viewAccessCodes, setViewAccessCodes] = useState(false)
      const [viewMessages, setViewMessages] = useState(false)
      const [viewVerifiedAlumni, setViewVerifiedAlumni] = useState(false)
      const [viewFAQ, setViewFAQ] = useState(false)
      const [ViewRankHolder, setViewRankViewRankHolder] = useState(false)

      const OpenEventHistory = () => {
            handleClose();
            setViewEventsHistory(true);
      }

      const OpenRankHolder = () => {      
            handleClose();
            setViewRankViewRankHolder(true);
      }

      const OpenUpcomingEvents = () => {     
            handleClose();
            setViewEvents(true);
      }
      
      const OpenPendingRQST = () => {     
            handleClose();
            setViewPendingRQST(true);
      }
      const OpenVerifiedAlumni = () => {    
            handleClose();
            setViewVerifiedAlumni(true);
      }

      const OpenAccessCode = () => {      
            handleClose();
            setViewAccessCodes(true);
      }

      const OpenMessages = () => {      
            handleClose();
            setViewMessages(true);
      }

      const OpenRegisteredAdmin = () => {       
            handleClose();
            setViewRegisteredAdmin(true);
      }

      const OpenFAQ = () => {
            handleClose();
            setViewFAQ(true);
      }

      const handleClose = () => {
            setViewEventsHistory(false);
            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
            setViewRankViewRankHolder(false);
      }

  return (
    <div className='h-screen bg-slate-900 w-full flex gap-8'>
      <div className='w-[25%] pt-8'>

<button onClick={OpenPendingRQST}
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Pending Registration Requests</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{pending_request_DB.length}</h2>
</button>

<button onClick={OpenVerifiedAlumni}
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Verified Alumni</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{verified_alumni_DB.length}</h2>
</button>

<button onClick={OpenRankHolder}
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Rank Holders</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{rank_holders_db.length}</h2>
</button>

<button onClick={OpenUpcomingEvents}
      className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Upcoming Events</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{UpcomingEvents_DB.length}</h2>
</button>

<button onClick={OpenEventHistory}
      className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Events History Timeline</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{event_history_db.length}</h2>
</button>



<button onClick={OpenAccessCode}
      className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Access Code Generated</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{access_code_DB.length}</h2>
</button>

<button onClick={OpenRegisteredAdmin}
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Registered Admin</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{admin_DB.length}</h2>
</button>

<button onClick={OpenFAQ} 
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>FAQs</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{faq_db.length}</h2>
</button>

<button onClick={OpenMessages}
className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-2   flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>User Messages</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{user_messages_db.length}</h2>
</button>
</div>



{viewEvents && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ManageUpcomingEvents UpcomingEvents_DB={UpcomingEvents_DB} />
      </div>
)}


{viewAccessCodes && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewAccessCodes ProtectedView_DB={access_code_DB} />
      </div>
) }


{viewFAQ && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ManageFAQ faq_DB={faq_db} />
      </div>
) }

{viewRegisteredAdmin && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewAdmins _admin={admin_DB} />
      </div>
)}


{ViewRankHolder && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewRankHolders rank_holder_DB={rank_holders_db} />
      </div>
)}

{viewVerifiedAlumni && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewAlumni alumni_DB={verified_alumni_DB} />
      </div>
)}

{viewEventsHistory && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewEventsHistory event_history_timeline={event_history_db} />
      </div>
)}

{viewMessages && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewMessages user_message_DB={user_messages_db} />
      </div>
)}

</div>
)
}

export default Overview
