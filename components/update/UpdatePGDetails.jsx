import React, { useState } from 'react'

const UpdatePGDetails = ({user}) => {
    const [showPGFields, setShowPGFields] = useState(false);
    const [pg, setPG] = useState(user.any_degree_after_ug);
 
    const handlePGChange = (e) => {

        if(e.target.value === 'Yes') {
            setShowPGFields(true);
            setPG('Yes')
        } 
        else {
            setShowPGFields(false);
            setPG('No')
        }
    }


    return (
     
        <div className='w-full mt-12'>           
            {user.any_degree_after_ug == 'Yes' && (
                <div className="mt-5 flex flex-col text-white w-full justify-start">
                <p className='text-left flex items-center'>
                    Did you pursue or currently pursuing any degree after UG?   
                </p>
                <div className="flex flex-row mt-3" onChange={handlePGChange} onLoad={handlePGChange} >
                    <label htmlFor='yes' className='mr-4'>
                    <input type='radio' name='pg' value='Yes' defaultChecked defaultValue='Yes' />
                    &ensp;Yes&ensp;&ensp;
                    </label>
                    <label htmlFor='no' className='ml-2'>
                    <input type='radio' id='pg-no' name='pg' value='No' />
                    &ensp;No&ensp;&ensp;
                    </label>
                </div>

                
            </div>

             

            )}

            {user.any_degree_after_ug == 'No' && (
                <div className="mt-5 flex flex-col text-white w-full justify-start">
                <p className='text-left flex items-center'>
                    Did you pursue or currently pursuing any degree after UG?   
                </p>
                <div className="flex flex-row mt-3 ml-8" onChange={handlePGChange}>
                    <label htmlFor='yes' className='mr-4'>
                    <input type='radio' id='pg-yes' name='pg' value='Yes' />
                    &ensp;Yes&ensp;&ensp;
                    </label>
                    <label htmlFor='no' className='ml-2'>
                    <input type='radio' id='pg-no' name='pg' value='No' defaultChecked />
                    &ensp;No&ensp;&ensp;
                    </label>
                </div>
            </div>
            )}


{pg=='Yes' ? (
                <div id="pg_fields">
                    <div className="mt-4 flex flex-col md:flex-row w-full">
                        <label htmlFor='pgDegree' className='text-white text-left ml-5 flex items-center w-60 pl-8'>
                            Recent Degree:
                        </label>
                        {user.pg_degree == '' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled selected>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'MSC' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC" selected>Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'MCA' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA" selected>Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'MBA' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA" selected>Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'MTECH' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH" selected>Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'PhD' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD" selected>Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'BEd' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd" selected>Bachelor of Education (B.Ed.)</option>
                            <option value="Others">Others</option>
                        </select>
                        )}
                        {user.pg_degree == 'Others' && (
                            <select id='pgDegree' name='pgDegree' className='p-3 my-2 rounded-md bg-gray-800 text-white w-[40%]'>
                            <option value="" disabled>Select a Degree</option>
                            <option value="MSC">Master of Science (M.Sc.)</option>
                            <option value="MCA">Master of Computer Applications (MCA)</option>
                            <option value="MBA">Master of Business Administration (MBA)</option>
                            <option value="MTECH">Master of Technology (M.Tech.)</option>
                            <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                            <option value="BEd">Bachelor of Education (B.Ed.)</option>
                            <option value="Others" selected>Others</option>
                        </select>
                        )}
                    </div>
                    <div className="mt-3 flex flex-col md:flex-row">
                        <label htmlFor='pgSpecialization' className='text-white text-left ml-5 flex items-center w-60 pl-8'>
                            Specialization:
                        </label>
                        <input
                            type='text'
                            id='pgSpecialization'
                            name='pgSpecialization'
                            placeholder='Enter your post-graduation specialization'
                            className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.pg_specialization}
                        />
                    </div>
                    <div className='mt-3 flex flex-col md:flex-row'>
                        <label htmlFor='pgStartingYear' className='text-white text-left ml-5 flex items-center w-60 pl-8'>
                        Year of Admission (PG):    
                        </label>
                        <input 
                            type='tel'
                            id='pgStartingYear'
                            name='pgStartingYear'
                            required
                            placeholder='Enter your starting year of post-graduation'
                            className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.pg_admissionYear}
                        />
                    </div>
                    <div className='mt-3 flex flex-col md:flex-row'>
                        <label htmlFor='pgPassingYear' className='text-white text-left ml-5 flex items-center w-60 pl-8'>
                        Year of Passing (PG):    
                        </label>
                        <input
                            type='tel'
                            id='pgPassingYear'
                            name='pgPassingYear'
                            required
                            placeholder='Enter your starting year of post-graduation'
                            className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                            defaultValue={user.pg_passingYear}
                        />
                    </div>
                </div>
            ):(<></>)}

            
        </div>
    )

}

export default UpdatePGDetails
