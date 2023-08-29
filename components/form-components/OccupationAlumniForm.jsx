import React, {useState} from 'react'
import { FaAsterisk } from 'react-icons/fa'

const OccupationAlumniForm = () => {
    
    const [showCompanyFields, setShowCompanyFields] = useState(false);
    const handleOccupationChange = (e) => {
        if (e.target.value === 'Employed'|| e.target.value === 'Business' || e.target.value === 'Teacher/Professor') {
            setShowCompanyFields(true);
        } else {
            setShowCompanyFields(false);
        }
    }
    
    return (
        <div className='w-full mt-12'>
         <h1 className='mt-20 text-center font-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-sky-600 from-30% via-pink-500 via-50% to-green-400 to-90%'>Current Occupation</h1>
        <p className="text-red-600 mb-2 text-sm tracking-wide text-center">Provide occupation details if any!</p>
        <hr className="border-gray-700 w-full mb-12" />

            

            
            <div className="mt-3 w-full flex flex-col md:flex-row justify-start">
                <label htmlFor='current-occupation' className='text-white text-left w-60 flex items-center md:pl-10'>
                    Current Occupation: <FaAsterisk color="red" size={8} className="ml-1" />
                </label>
                <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled selected>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            {showCompanyFields && (
                <div id="company-fields">
                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='companyName' className='text-white text-left w-60 flex items-center md:pl-10'>
                            Company / Organization: <FaAsterisk color="red" size={8} className="ml-1" />
                        </label>
                        <input type='text' id='companyName' name='companyName' required
                            placeholder='Enter the name of your current company or organization'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]' />
                    </div>


                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='yrsOfExp' className='text-white text-left w-60 flex items-center md:pl-10'>
                            Years of Experience: <FaAsterisk color="red" size={8} className="ml-1" />
                        </label>
                        <input
                            type='number'
                            id='yrsOfExp'
                            name='yrsOfExp'
                            placeholder='Enter your experience in no. of years'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]'
                        />
                    </div>
                </div>
            )}
            
            <div className="my-5 flex flex-col text-white justify-start">
                <p className='text-left flex items-center md:pl-10'>
                    Are you currently working in a technology-related field? <FaAsterisk color="red" size={8} className="ml-1" />
                </p>
                <div className="flex flex-row mt-3 ml-12">
                    <label htmlFor='yes' className='mr-4'>
                    <input type='radio' id='tech-yes' name='tech' value='Yes' />
                    &ensp;Yes&ensp;&ensp;
                    </label>
                    <label htmlFor='no' className='ml-2'>
                    <input type='radio' id='tech-no' name='tech' value='No' />
                    &ensp;No&ensp;&ensp;
                    </label>
                </div>
            </div>
        </div>
    )
}

export default OccupationAlumniForm
