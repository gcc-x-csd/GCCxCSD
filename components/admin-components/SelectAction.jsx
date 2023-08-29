import React, {useState} from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { AddAdminForm, AddUpcomingEventForm, AddAccessCodes, AddFAQForm, AddRankHolderForm } from '@/components'


const SelectAction = () => {
    
    const [showAdmin, setShowAdmin] = useState(false);
    const [showUpcomingEvent, setShowUpcomingEvent] = useState(false);  
    const [showAccessCode, setShowAccessCode] = useState(false);
    const [showRankHolder, setShowRankHolder] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    const handleActionChange = (e) => {
        if (e.target.value === 'Admin') {
            setShowAdmin(true)

            setShowUpcomingEvent(false);
            setShowAccessCode(false);
            setShowFAQ(false);
            setShowRankHolder(false);
        } 
        else if (e.target.value === 'UpcomingEvent') {
            setShowUpcomingEvent(true)

            setShowAdmin(false);
            setShowAccessCode(false);
            setShowFAQ(false);
            setShowRankHolder(false);
        } 
        else if (e.target.value === 'AccessCode') {
            setShowAccessCode(true)

            setShowAdmin(false);
            setShowUpcomingEvent(false);
            setShowFAQ(false);
            setShowRankHolder(false);
        } 
        else if (e.target.value === 'FAQ') {
            setShowFAQ(true)

            setShowAdmin(false);
            setShowUpcomingEvent(false);
            setShowAccessCode(false);
            setShowRankHolder(false);
        }
        else if(e.target.value === 'RankHolder') {
            setShowRankHolder(true)

            setShowFAQ(false)
            setShowAdmin(false);
            setShowUpcomingEvent(false);
            setShowAccessCode(false);
        }
       
    }

    const handleCloseForm = (e) => {
        setShowAdmin(false);
        setShowUpcomingEvent(false);
        setShowAccessCode(false);
        setShowFAQ(false);
        setShowRankHolder(false);
    }
    
    return (
        <div className='w-full'>   
            <div className="w-full flex flex-col md:flex-row justify-start">
                <select required
                className='p-2.5 my-2 w-[100%] rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600 cursor-pointer' 
                onChange={handleActionChange}>
                    <option value="" disabled selected>Quick Actions</option>
                    <option value="FAQ" className='text-white'>Add New FAQ</option>
                    <option value="Admin" className='text-white'>Add New Admin </option>
                    <option value="RankHolder" className='text-white'>Add New Rank Holder</option>
                    <option value="AccessCode" className='text-white'>Add New Access Code</option>
                    <option value="UpcomingEvent" className='text-white'>Add New Upcoming Event</option>
                </select>
            </div>

            {showAdmin && (
                <div className='absolute  right-4 shadow-lg rounded-lg w-[500px]'>
                    <div className="flex flex-col justify-start">
                        <button type='reset' className='w-fit text-white absolute right-0 m-2' onClick={handleCloseForm}>
                            <RxCrossCircled size={24} className='text-red-300 hover:text-red-600' />
                        </button>
                        <AddAdminForm />   
                    </div>
                </div>
            )}
            
            {showUpcomingEvent && (
                <div id="company-fields" className='absolute  right-4 shadow-lg rounded-lg w-[500px]'>
                    <div className="flex flex-col justify-start">
                        <button className='w-fit text-white absolute right-0 m-2' onClick={handleCloseForm}>
                            <RxCrossCircled size={24} className='text-red-300 hover:text-red-600' />
                        </button>
                        <AddUpcomingEventForm />   
                    </div>
                </div>
            )}

            {showAccessCode && (
                <div id="company-fields" className='absolute  right-4 shadow-lg rounded-lg w-[500px]'>
                    <div className="flex flex-col justify-start">
                        <button className='w-fit text-white absolute right-0 m-2' onClick={handleCloseForm}>
                            <RxCrossCircled size={24} className='text-red-300 hover:text-red-600' />
                        </button>
                        <AddAccessCodes />   
                    </div>
                </div>
            )}

            {showFAQ && (
                <div id="company-fields" className='absolute  right-4 shadow-lg rounded-lg w-[500px]'>
                    <div className="flex flex-col justify-start">
                        <button className='w-fit text-white absolute right-0 m-2' onClick={handleCloseForm}>
                            <RxCrossCircled size={24} className='text-red-300 hover:text-red-600' />
                        </button>
                        <AddFAQForm />   
                    </div>
                </div>
            )}

            {showRankHolder && (
                <div id="company-fields" className='absolute right-4 shadow-lg rounded-lg w-[500px]'>
                    <div className="flex flex-col justify-start">
                        <button className='w-fit text-white absolute right-0 m-2' onClick={handleCloseForm}>
                            <RxCrossCircled size={24} className='text-red-300 hover:text-red-600' />
                        </button>
                        <AddRankHolderForm />   
                    </div>
                </div>
            )}
          
        </div>
    )
}

export default SelectAction
