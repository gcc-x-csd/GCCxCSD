import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { MdEventNote } from 'react-icons/md'
import { GoDash } from 'react-icons/go'
import axios from 'axios'

const AddUpcomingEventForm = () => {

// Function to Handle On Submit
const handleUpcomingEventSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    // Sends data over a server
        try {
            const { data } = await axios({
              url: "/api/admin/addUpcomingEvents",
              method: "POST",
              data: form_values
              })
        } 
        catch (error) {
              console.log("Error!");
        }
}


return (
    <section>
    
    <div className="w-full rounded-xl shadow border bg-gray-900 border-gray-700">
        <div className="p-6  md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Add New Upcoming Event!
            </h1>
            <hr class="h-px my-8 mb-12 border-0 bg-gray-700"></hr>
            
            <form className="space-y-4 md:space-y-6" action="/api/admin/addUpcomingEvents" method='POST'>

                <div className='flex gap-2'>
                    <label htmlFor="topic" className="flex text-sm font-medium w-[7rem] text-gray-900 dark:text-white">
                    <p className='self-center'>Topic:</p>  <FaAsterisk color="red" size={8} className="ml-1 self-center" />
                    </label>
                    <input type="text" name="topic" className="sm:text-sm rounded-lg  block w-full p-2 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="Enter topic of the event/seminar/webinar" required />
                </div>

                <div className='flex gap-2'>
                    <label htmlFor="speaker_name" className="flex text-sm font-medium w-[7rem] text-gray-900 dark:text-white">
                    <p className='self-center'>Speaker:</p> 
                    </label>
                    <input type="text" name="speaker_name" placeholder="Name of speaker | CS-Dept (default)" defaultValue={'Department of Computer Science'}
                    className="sm:text-sm rounded-lg  block w-full p-2 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" />
                </div>

                <div className='flex gap-2'>
                    <label htmlFor="description" className="flex text-sm font-medium w-[7rem] text-gray-900 dark:text-white">
                    <p className='self-center'>Description:</p>  <FaAsterisk color="red" size={8} className="ml-1 self-center" />
                    </label>
                    <textarea name='description' maxLength={200} rows="1" class="block p-2.5 w-full text-sm rounded-lg shadow-sm border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-primary-500" placeholder="Write a meta description... (Max: 200 characters)" required></textarea>
                </div>

                <div className='flex gap-2 align-middle w-full'>   
                    <label htmlFor="gmeet_url" className="flex text-sm font-medium w-[7rem] text-gray-900 dark:text-white">
                        <p className='self-center'>Gmeet:</p>  
                    </label>                    
                    <input type="url" name="gmeet_url" 
                    className="sm:text-sm rounded-lg  block w-full p-2 bg-gray-700 border border-gray-500 placeholder-gray-400 text-white" placeholder="Google Meet URL - (https://meet.google.com/...)" />
                </div>


{/* DAY OF EVENT */}
                <div className='flex gap-2 align-middle w-full'>
                <label htmlFor="date" className="flex mb-2 text-sm font-medium w-[8rem] text-gray-900 dark:text-white">
                    <p className='self-center'>Date:</p>  <FaAsterisk color="red" size={8} className="ml-1 self-center" />
                </label>
                        <div>
                            <select required name='day'
                            className='p-2 w-[5rem] overflow-y-scroll rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600'>
                                <option value="" disabled selected>Day</option>
                                <option value="1st" className='text-white'>1</option>
                                <option value="2nd" className='text-white'>2</option>
                                <option value="3rd" className='text-white'>3</option>
                                <option value="4th" className='text-white'>4</option>
                                <option value="5th" className='text-white'>5</option>
                                <option value="6th" className='text-white'>6</option>
                                <option value="7th" className='text-white'>7</option>
                                <option value="8th" className='text-white'>8</option>
                                <option value="9th" className='text-white'>9</option>
                                <option value="10th" className='text-white'>10</option>
                                <option value="11th" className='text-white'>11</option>
                                <option value="12th" className='text-white'>12</option>
                                <option value="13th" className='text-white'>13</option>
                                <option value="14th" className='text-white'>14</option>
                                <option value="15th" className='text-white'>15</option>
                                <option value="16th" className='text-white'>16</option>
                                <option value="17th" className='text-white'>17</option>
                                <option value="18th" className='text-white'>18</option>
                                <option value="19th" className='text-white'>19</option>
                                <option value="20th" className='text-white'>20</option>
                                <option value="21st" className='text-white'>21</option>
                                <option value="22nd" className='text-white'>22</option>
                                <option value="23rd" className='text-white'>23</option>
                                <option value="24th" className='text-white'>24</option>
                                <option value="25th" className='text-white'>25</option>
                                <option value="26th" className='text-white'>26</option>
                                <option value="27th" className='text-white'>27</option>
                                <option value="28th" className='text-white'>28</option>
                                <option value="29th" className='text-white'>29</option>
                                <option value="30th" className='text-white'>30</option>
                                <option value="31st" className='text-white'>31</option>
                            </select>
                        </div>
                        
                        <GoDash className='text-gray-500 self-center' />     
                        
                        <div>
                            <select required name='month'
                            className='p-2 w-[8rem] rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600'>
                                <option value="" disabled selected>Month</option>
                                <option value="January" className='text-white'>January</option>
                                <option value="February" className='text-white'>February</option>
                                <option value="March" className='text-white'>March</option>
                                <option value="April" className='text-white'>April</option>
                                <option value="May" className='text-white'>May</option>
                                <option value="June" className='text-white'>June</option>
                                <option value="July" className='text-white'>July</option>
                                <option value="August" className='text-white'>August</option>
                                <option value="September" className='text-white'>September</option>
                                <option value="October" className='text-white'>October</option>
                                <option value="November" className='text-white'>November</option>
                                <option value="December" className='text-white'>December</option>
                            </select>
                        </div>
                        
                        <GoDash className='text-gray-500 self-center' /> 
                        
                        <div>
                            <input type="tel" name="year" 
                            className="sm:text-sm rounded-lg  block w-[5rem] p-2 bg-gray-800 border border-gray-500 placeholder-gray-400 text-white" placeholder="Year" required />
                        </div>
                </div>



{/* TIME OF EVENT */}
                
                <div className='flex gap-2 align-middle w-full'>
                    <label htmlFor="time" className="flex mb-2 text-sm font-medium w-[8rem] text-gray-900 dark:text-white">
                        <p className='self-center'>Time:</p>  <FaAsterisk color="red" size={8} className="ml-1 self-center" />
                    </label>

                        <div>
                            <select required name='hours'
                             className='p-2 w-[5rem] overflow-y-scroll rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600'>
                                <option value="" disabled selected>Hour/s</option>
                                <option value="1" className='text-white'>1</option>
                                <option value="2" className='text-white'>2</option>
                                <option value="3" className='text-white'>3</option>
                                <option value="4" className='text-white'>4</option>
                                <option value="5" className='text-white'>5</option>
                                <option value="6" className='text-white'>6</option>
                                <option value="7" className='text-white'>7</option>
                                <option value="8" className='text-white'>8</option>
                                <option value="9" className='text-white'>9</option>
                                <option value="10" className='text-white'>10</option>
                                <option value="11" className='text-white'>11</option>
                                <option value="12" className='text-white'>12</option> 
                            </select>
                        </div>

                        <p className='text-gray-500 self-center font-extrabold text-lg mx-0.5'>:</p>  

                        <div>                       
                            <input type="tel" name="minutes" 
                            className="sm:text-sm rounded-lg  block w-[8rem] p-2 bg-gray-800 border border-gray-500 placeholder-gray-400 text-white" placeholder="Minute/s" />
                        </div>

                        <GoDash className='text-gray-500 self-center' /> 
                        
                        <div>
                            <select required name='am_pm'
                            className='p-2 w-[5rem] rounded-md bg-gray-800 text-gray-400 border-[1px] border-gray-600'>
                                <option value="" disabled selected>am/pm</option>
                                <option value="AM" className='text-white'>AM</option>
                                <option value="PM" className='text-white'>PM</option>
                            </select>
                        </div>        
                </div>
               
                
               
                <button type="submit" onSubmit={handleUpcomingEventSubmit}
                className="flex gap-2 align-middle justify-center w-full text-white bg-pink-700 hover:bg-pink-800 rounded-lg text-md px-5 py-2.5 text-center">
                    <MdEventNote size={20} color='white' className='self-center' /> <p className='text-md'>Add Upcoming Event</p>
                </button>
                
            </form>
        </div>
    </div>

</section>
  )
}

export default AddUpcomingEventForm
