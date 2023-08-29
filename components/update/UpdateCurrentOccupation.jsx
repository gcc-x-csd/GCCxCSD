import React, {useState} from 'react'

const UpdateCurrentOccupation = ({ user }) => {
   
    const [showCompanyFields, setShowCompanyFields] = useState(user.current_occupation);
    const handleOccupationChange = (e) => {
        if (e.target.value === 'Student') {
            setShowCompanyFields('Student');
            user.company_or_org = ''
            user.yrs_of_experience = 0
        }
        else if (e.target.value === 'Employed') {
            setShowCompanyFields('Employed');
        }
        else if(e.target.value === 'Business') {
            setShowCompanyFields('Business');
        }
        else if(e.target.value === 'Teacher/Professor') {
            setShowCompanyFields('Teacher/Professor');
        }
        else if (e.target.value === 'Unemployed') {
            setShowCompanyFields('Unemployed');
            user.company_or_org = ''
            user.yrs_of_experience = 0
        }
        else if (e.target.value === 'Retired') {
            setShowCompanyFields('Retired');
            user.company_or_org = ''
            user.yrs_of_experience = 0
        }
        else {
            setShowCompanyFields('Others');
            user.company_or_org = ''
            user.yrs_of_experience = 0
        }
    }
    
    return (
        <div className='w-full mt-12'>
         <h1 className='mt-20 font-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-sky-600 from-30% via-pink-500 via-50% to-green-400 to-90%'>Update Current Occupation</h1>
        <p className="text-red-600 mb-2 text-sm tracking-wide">Provide occupation details if any!</p>
        <hr className="border-gray-700 w-full mb-12" />

            

            
            <div className="mt-3 w-full flex flex-col md:flex-row justify-start">
                <label htmlFor='current-occupation' className='text-white text-left w-60 flex items-center '>
                    Current Occupation:  
                </label>
                {user.current_occupation == 'Student' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student" selected>Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}

                {user.current_occupation == 'Employed' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed" selected>Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}

                {user.current_occupation == 'Business' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business" selected>Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}

                {user.current_occupation == 'Teacher/Professor' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor" selected>Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}

                {user.current_occupation == 'Unemployed' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed" selected>Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}
                {user.current_occupation == 'Retired' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired" selected>Retired</option>
                    <option value="Others">Others</option>
                </select>
                )}

                {user.current_occupation == 'Others' && (
                    <select id='current_occupation' name='current_occupation' required className='p-3 my-2 mx-5 w-[40%] rounded-md bg-gray-800 text-white' onChange={handleOccupationChange}>
                    <option value="" disabled>Select an Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others" selected>Others</option>
                </select>
                )}

            </div>

            {showCompanyFields == 'Employed'  && (
                <div id="company-fields">
                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='companyName' className='text-white text-left w-60 flex items-center '>
                            Company / Organization:  
                        </label>
                        <input type='text' id='companyName' name='companyName' required
                            placeholder='Enter the name of your current company or organization'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]' 
                            defaultValue={user.company_or_org}
                            />
                    </div>


                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='yrsOfExp' className='text-white text-left w-60 flex items-center '>
                            Years of Experience:  
                        </label>
                        <input
                            type='number'
                            id='yrsOfExp'
                            name='yrsOfExp'
                            placeholder='Enter your experience in no. of years'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.yrs_of_experience}
                        />
                    </div>
                </div>
            )}
            
            {showCompanyFields == 'Business' && (
                <div id="company-fields">
                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='companyName' className='text-white text-left w-60 flex items-center '>
                            Company / Organization:  
                        </label>
                        <input type='text' id='companyName' name='companyName' required
                            placeholder='Enter the name of your current company or organization'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]' 
                            defaultValue={user.company_or_org}
                            />
                    </div>


                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='yrsOfExp' className='text-white text-left w-60 flex items-center '>
                            Years of Experience:  
                        </label>
                        <input
                            type='number'
                            id='yrsOfExp'
                            name='yrsOfExp'
                            placeholder='Enter your experience in no. of years'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.yrs_of_experience}
                        />
                    </div>
                </div>
            )}

            {showCompanyFields == 'Teacher/Professor' && (
                <div id="company-fields">
                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='companyName' className='text-white text-left w-60 flex items-center '>
                            Company / Organization:  
                        </label>
                        <input type='text' id='companyName' name='companyName' required
                            placeholder='Enter the name of your current company or organization'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]' 
                            defaultValue={user.company_or_org}
                            />
                    </div>


                    <div className="mt-3 flex flex-col md:flex-row justify-start">
                        <label htmlFor='yrsOfExp' className='text-white text-left w-60 flex items-center '>
                            Years of Experience:  
                        </label>
                        <input
                            type='number'
                            id='yrsOfExp'
                            name='yrsOfExp'
                            placeholder='Enter your experience in no. of years'
                            className='p-2 my-2 mx-5 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.yrs_of_experience}
                        />
                    </div>
                </div>
            )}

           

           



{/* Working in Tech field or Not */}
            {user.workingInTechField == 'Yes' && (
                 <div className="my-5 flex flex-col text-white justify-start">
                 <p className='text-left flex items-center '>
                     Are you currently working in a technology-related field?  
                 </p>
                 <div className="flex flex-row mt-3 ml-8">
                     <label htmlFor='yes' className='mr-4'>
                     <input type='radio' id='tech-yes' name='tech' value='Yes' defaultChecked />
                     &ensp;Yes&ensp;&ensp;
                     </label>
                     <label htmlFor='no' className='ml-2'>
                     <input type='radio' id='tech-no' name='tech' value='No' />
                     &ensp;No&ensp;&ensp;
                     </label>
                 </div>
             </div>
            )}
             
             
            {user.workingInTechField == 'No' && (
                 <div className="my-5 flex flex-col text-white justify-start">
                 <p className='text-left flex items-center '>
                     Are you currently working in a technology-related field?  
                 </p>
                 <div className="flex flex-row mt-3 ml-8">
                     <label htmlFor='yes' className='mr-4'>
                     <input type='radio' id='tech-yes' name='tech' value='Yes' />
                     &ensp;Yes&ensp;&ensp;
                     </label>
                     <label htmlFor='no' className='ml-2'>
                     <input type='radio' id='tech-no' name='tech' value='No' defaultChecked />
                     &ensp;No&ensp;&ensp;
                     </label>
                 </div>
             </div>
            )}

           
        </div>
    )
}

export default UpdateCurrentOccupation
