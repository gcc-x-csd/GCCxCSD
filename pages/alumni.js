/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import mongoose from "mongoose";
import VerifiedAlumni from "@/model/VerifiedAlumni";
import { OccupationFilterCard, DegreeFilter,AlumniComponent, DefaultLatestTenAlumni, TechFilter } from '@/components'
import { SubHeader } from '@/components';
import { FiFilter } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { FcClearFilters } from 'react-icons/fc'
import { ImUserCheck } from 'react-icons/im'


const alumni = ({ verified_alumni }) => {

// Enable filtering by using their current occupation 
  const [student, setStudent] = useState(false);
  const [employed, setEmployed] = useState(false);
  const [unemployed, setUnemployed] = useState(false);
  const [professor, setProfessor] = useState(false);
  const [business, setBusiness] = useState(false);
  const [others, setOthers] = useState(false);
  const [retired, setRetired] = useState(false);

  
// Enable filtering by using their degree 
  const [MCA, setMCA] = useState(false);
  const [MSC, setMSC] = useState(false);
  const [MBA, setMBA] = useState(false);
  const [MTECH, setMTECH] = useState(false);
  const [PhD, setPhD] = useState(false);
  const [BEd, setBEd] = useState(false);
  const [Other, setOther] = useState(false);

// Tech Non-Tech
  const [techFieldYes,setTechFieldYes] = useState(false);
  const [techFieldNo,setTechFieldNo] = useState(false);

const handleFilter = (e) => {
  setAlumni(false);
  setAlumniByAdmission(false);
  setAlumniByPassing(false);

  if(e.target.value === 'Student') {
    setStudent(true);
    setEmployed(false);  setUnemployed(false);  setProfessor(false);  setBusiness(false); setOthers(false);   setRetired(false);
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }

  if(e.target.value === 'Employed') {
    setEmployed(true);
    setStudent(false);   setUnemployed(false);  setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);
    setTechFieldYes(false);
    setTechFieldNo(false); 
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }
      
  if(e.target.value === 'Unemployed') {
    setUnemployed(true);
    setStudent(false);   setEmployed(false);  setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }

  if(e.target.value === 'Teacher/Professor') {
    setProfessor(true);
    setStudent(false);   setEmployed(false);  setUnemployed(false);  setBusiness(false); setRetired(false);  setOthers(false);
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }
      
  if(e.target.value === 'Business') {
    setBusiness(true);
    setStudent(false);   setEmployed(false);  setUnemployed(false);  setProfessor(false);  setRetired(false);  setOthers(false);
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }

  if(e.target.value === 'Retired') {
    setRetired(true);
    setStudent(false);   setEmployed(false);  setUnemployed(false);  setProfessor(false);  setBusiness(false); setOthers(false);
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }
        
  if (e.target.value === 'Other') {
    setOthers(true);
    setStudent(false);  setEmployed(false); setUnemployed(false); setProfessor(false);  setBusiness(false); setRetired(false);  
    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);  setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
  }




  if(e.target.value === 'MSC') {
    setMSC(true);
    setMCA(false);  setMBA(false);   setMTECH(false);  setPhD(false);   setBEd(false);  setOther(false);
    setTechFieldYes(false);
  setTechFieldNo(false);
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);    
  }

  if(e.target.value === 'MCA') {
    setMCA(true);
    setMSC(false);   setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);   setOther(false);
    setTechFieldYes(false);
    setTechFieldNo(false);     
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'MBA') {
    setMBA(true);
    setMCA(false);   setMSC(false);   setMTECH(false);   setPhD(false);   setBEd(false);   setOther(false);
    setTechFieldYes(false);
    setTechFieldNo(false);     
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'MTECH') {
    setMTECH(true);
    setMSC(false);   setMCA(false);   setMBA(false);   setPhD(false);   setBEd(false);   setOther(false);
    setTechFieldYes(false);
    setTechFieldNo(false);     
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'PhD') {
    setPhD(true);
    setMSC(false);   setMCA(false);   setMBA(false);   setMTECH(false);   setBEd(false);   setOther(false);
    setTechFieldYes(false);
    setTechFieldNo(false);     
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'BEd') {
    setBEd(true);
    setMSC(false);   setMCA(false);   setMBA(false);   setMTECH(false);   setPhD(false);   setOther(false);
    setTechFieldYes(false);
    setTechFieldNo(false);    
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'Others') {
    setOther(true);
    setMSC(false);   setMCA(false);   setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
    setTechFieldYes(false);
  setTechFieldNo(false);      
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'Yes') {
    setTechFieldYes(true);
    setTechFieldNo(false);
    setOther(false);
    setMSC(false);   setMCA(false);   setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
          
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }

  if(e.target.value === 'No') {
    setTechFieldNo(true);
    setTechFieldYes(false);
    setOther(false);
    setMSC(false);   setMCA(false);   setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);
          
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
  }
}


// For Searching . . . 

// 1. Using Name
const [name, setName] = useState('')
// 2. Using Admission Year (UG)
const [admissionYear, setAdmissionYear] = useState('')
// 3. Using Passing Year (UG)
const [passingYear, setPassingYear] = useState('')


// Display state -> for showing and hiding
const [alumni, setAlumni] = useState(false);
const [alumniByAdmission, setAlumniByAdmission] = useState(false);
const [alumniByPassing, setAlumniByPassing] = useState(false);


// 1. Search by name functionality
const searchAlumni = () => {
  if(name.length == 0) {
    setAlumni(false);
    setName('');

    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);   setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false); 
  } 
  else {
    verified_alumni.map((alumni) => {
      if( alumni.name.toLowerCase().startsWith(name.toLowerCase())) {
        setAlumni(true);    
        setAlumniByAdmission(false);
        setAlumniByPassing(false);
        setTechFieldYes(false);
        setTechFieldNo(false);
      setOther(false);   setMSC(false);   setMCA(false);   
      setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
      setUnemployed(false); setStudent(false);   setEmployed(false);  
      setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
    }
  })
}
}


// 2. Search by admission year (UG) functionality
const searchByAdmissionYear = () => {
  if(admissionYear.length == 0) {
    setAlumni(false);
    setAdmissionYear('');

    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);   setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false); 
  } 
  else {
    verified_alumni.map((alumni) => {
      if(alumni.admission_year == parseInt(admissionYear)) {
        setAlumniByAdmission(true);
        setAlumniByPassing(false);
        setAlumni(false);
        setTechFieldYes(false);
        setTechFieldNo(false);
      setOther(false);   setMSC(false);   setMCA(false);   
      setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
      setUnemployed(false); setStudent(false);   setEmployed(false);  
      setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
    }
  })
}
}


// 3. Search by passing year (UG) functionality
const searchByPassingYear = () => {
  if(passingYear.length == 0) {
    setAlumni(false);
    setPassingYear('')

    setTechFieldYes(false);
    setTechFieldNo(false);
    setOther(false);   setMSC(false);   setMCA(false);   
    setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
    setUnemployed(false); setStudent(false);   setEmployed(false);  
    setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false); 
  } 
  else {
    verified_alumni.map((alumni) => {
      if(alumni.passing_year == parseInt(passingYear)) {
        setAlumniByPassing(true);
        setAlumni(false);
        setAlumniByAdmission(false);

      setTechFieldYes(false);
      setTechFieldNo(false);
      setOther(false);   setMSC(false);   setMCA(false);   
      setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
      setUnemployed(false); setStudent(false);   setEmployed(false);  
      setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
    }
  })
}
}


// ALL FILTER CLEAR
const clearAllFilter = () => {
  setName('');
  setAdmissionYear('')
  setPassingYear('')


  setAlumni(false);
  setAlumniByPassing(false);
  setAlumniByAdmission(false);
  setTechFieldYes(false);
  setTechFieldNo(false);
  setOther(false);   setMSC(false);   setMCA(false);   
  setMBA(false);   setMTECH(false);   setPhD(false);   setBEd(false);      
  setUnemployed(false); setStudent(false);   setEmployed(false);  
  setProfessor(false); setBusiness(false);   setOthers(false);  setRetired(false);  
}










  return (   
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950'>
      

        <SubHeader gradientText='CSx ' text='Community.' 
        metaDescription='Here, you can find all alumni and student of Department of Computer Science - Gurucharan College, Silchar' />

    <div className='lg:px-36 py-8 flex flex-col'>
   

   {/* SEARCHING FEATURE */}
<div className='w-[60%]'>

<form className='my-2'>   
        <div className="relative">
         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ImUserCheck size={24} className='text-green-300' />
          </div>
        <input type="search" name='alumni_name' placeholder="Search by the name of Alumni" required
        className="block w-full p-4 pl-12 text-lg border rounded-lg bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
        defaultValue={'Search by the name of Alumni'}
        value={name}
        onChange={({ target }) => setName(target?.value)}  />

        <button type="button" onClick={searchAlumni} className="flex justify-center align-bottom text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <AiOutlineSearch size={24} /> <p className='text-white'>Search</p>
        </button>
    </div>
</form>


<div className='flex w-full gap-4'>

        <form className='w-[50%] my-2'>   
                <div class="relative">
                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdDateRange size={24} className='text-pink-500' />
                  </div>
                <input type="search" name='ug_admission' placeholder="Year of admission (UG)" required
                className="block w-full py-2 px-4 pl-12 text-md border rounded-lg bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                defaultValue={'Year of admission (UG)'}
                value={admissionYear}
                onChange={({ target }) => setAdmissionYear(target?.value)}  />
        
                <button type="button" onClick={searchByAdmissionYear} className="text-white absolute right-[3px] bottom-[3px] bg-emerald-600 font-medium rounded-lg text-sm px-4 py-2 hover:bg-emerald-700"><BiSearchAlt size={20} color='white' /></button>
            </div>
        </form>
          
        <form className='w-[50%] my-2'>   
                <div class="relative">
                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdDateRange size={24} className='text-pink-500' />
                  </div>
                <input type="search" name='ug_passing' placeholder="Year of passing (UG)" required
                className="block w-full py-2 px-4 pl-12 text-md border rounded-lg bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                defaultValue={'Year of passing (UG)'}
                value={passingYear}
                onChange={({ target }) => setPassingYear(target?.value)}  />
        
                <button type="button" onClick={searchByPassingYear} className="text-white absolute right-[3px] bottom-[3px] bg-emerald-600 font-medium rounded-lg text-sm px-4 py-2 hover:bg-emerald-700"><BiSearchAlt size={20} color='white' /></button>
            </div>
        </form>

</div>



<div className='flex w-full justify-between'>
        
<div className="mt-3 w-[30%] flex flex-col md:flex-row justify-start">
                {/* <label htmlFor='current-occupation' className='text-white text-left flex items-center md:pl-10'>
                    <FiFilter size={28} color='gray' />
                </label> */}
                <select name='current_occupation'  className='p-3 my-2 w-full  rounded-md bg-gray-700 disabled:text-gray-400 text-white' onChange={handleFilter}>
                    <option value="" disabled selected >Select current occcupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Business">Business</option>
                    <option value="Teacher/Professor">Teacher / Professor</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Others">Others</option>
                </select>
            </div>


            <div className="mt-3 w-[30%] flex flex-col md:flex-row justify-start">

                <select name='pgDegree' className='p-3 my-2 w-full rounded-md bg-gray-700 disabled:text-gray-400 text-white ' onChange={handleFilter}>
                   <option value="" disabled selected>Select degree</option>
                   <option value="MSC">Master of Science (M.Sc.)</option>
                   <option value="MCA">Master of Computer Applications (MCA)</option>
                   <option value="MBA">Master of Business Administration (MBA)</option>
                   <option value="MTECH">Master of Technology (M.Tech.)</option>
                   <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                   <option value="BEd">Bachelor of Education (B.Ed.)</option>
                   <option value="Others">Others</option>
                </select>
            </div>

            <div className="mt-3 w-[30%] flex flex-col md:flex-row justify-start">

                <select name='field' className='p-3 my-2 w-full rounded-md bg-gray-700 disabled:text-gray-400 text-white ' onChange={handleFilter}>
                   <option value="" disabled selected>Select field</option>
                   <option value="Yes">Tech</option>
                   <option value="No">Non-Tech</option>
                </select>
            </div>

</div>



</div>



<button type='button' onClick={clearAllFilter} className='w-fit my-8 flex gap-1 align-middle justify-center py-2 px-4 hover:py-1.5 rounded-lg bg-red-950  hover:border-2 hover:border-red-700'>
  <FcClearFilters size={20} /> <p className='text-white font-semibold'>Clear all filters</p>
</button>

      </div>



{/* Filter for current occupation: Student */}
{student && (
<OccupationFilterCard Database={verified_alumni} value='Student' />
)}

{/* Filter for current occupation: Employed */}
{employed && ( 
  <OccupationFilterCard Database={verified_alumni} value='Employed' />
)}


{/* Filter for current occupation: Unemployed */}
{unemployed && (
  <OccupationFilterCard Database={verified_alumni} value='Unemployed' />
)}


{/* Filter for current occupation: Professor/Teacher */}
{professor && (
  <OccupationFilterCard Database={verified_alumni} value='Teacher/Professor' />
)}

{/* Filter for current occupation: Business */}
{business && (
  <OccupationFilterCard Database={verified_alumni} value='Business' />
)}

{/* Filter for current occupation: Retired */}
{retired && (
  <OccupationFilterCard Database={verified_alumni} value='Retired' />
)}

{/* Filter for current occupation: Others */}
{others && (
  <OccupationFilterCard Database={verified_alumni} value='Other' />
)}







{/* Filter using Degree */}
{MCA && (
<DegreeFilter Database={verified_alumni} value='MCA' />
)}

{MSC && ( 
  <DegreeFilter Database={verified_alumni} value='MSC' />
)}

{MBA && (
  <DegreeFilter Database={verified_alumni} value='MBA' />
)}

{MTECH && (
  <DegreeFilter Database={verified_alumni} value='MTECH' />
)}

{PhD && (
  <DegreeFilter Database={verified_alumni} value='PhD' />
)}

{BEd && (
  <DegreeFilter Database={verified_alumni} value='BEd' />
)}

{Other && (
  <DegreeFilter Database={verified_alumni} value='Other' />
)}



{techFieldYes && (
  <TechFilter Database={verified_alumni} value='Yes' />
)}

{techFieldNo && (
  <TechFilter Database={verified_alumni} value='No' />
)}


{/*  1. Search using name of the alumni  */}

{alumni && (
  <div className='max-w-4xl lg:mx-32 py-12'> {verified_alumni.map((user) => (
    <div key={user._id}> { user.name.toLowerCase().startsWith(name.toLowerCase())  && (
      <AlumniComponent key={user._id} _fullName={user.name} _email={user.email} 
      _sex={user.sex} _ugAdmissionYear={user.admission_year} _ugPassingYear={user.passing_year} 
      _currentCity={user.current_city} _currentOccupation={user.current_occupation}
      _currentCompany={user.company_or_org} _yearsOfExperience={user.yrs_of_experience}
            
      _anyDegreeAfterUG={user.any_degree_after_ug} _lastDegree={user.pg_degree}
      _lastDegreeSpecialization={user.pg_specialization} _pgAdmissionYear={user.pg_admissionYear} 
      _pgPassingYear={user.pg_passingYear} 
            
      _facebook_url={user.facebook_url}
      _instagram_url={user.instagram_url}
      _twitter_url={user.twitter_url}
      _linkedin_url={user.linkedin_url}
      _github_url={user.github_url}
      _portfolio_url={user.portfolio_url}
        />
      )}
    </div> 
  ))}
  </div>
)}


{/*  2. Search using year of admission (UG)  */}

{alumniByAdmission && (
  <div className='max-w-4xl lg:mx-32 py-12'> {verified_alumni.map((user) => (
    <div key={user._id}> { user.admission_year ==  parseInt(admissionYear)  && (
      <AlumniComponent key={user._id} _fullName={user.name} _email={user.email} 
      _sex={user.sex} _ugAdmissionYear={user.admission_year} _ugPassingYear={user.passing_year} 
      _currentCity={user.current_city} _currentOccupation={user.current_occupation}
      _currentCompany={user.company_or_org} _yearsOfExperience={user.yrs_of_experience}
            
      _anyDegreeAfterUG={user.any_degree_after_ug} _lastDegree={user.pg_degree}
      _lastDegreeSpecialization={user.pg_specialization} _pgAdmissionYear={user.pg_admissionYear} 
      _pgPassingYear={user.pg_passingYear} 
            
      _facebook_url={user.facebook_url}
      _instagram_url={user.instagram_url}
      _twitter_url={user.twitter_url}
      _linkedin_url={user.linkedin_url}
      _github_url={user.github_url}
      _portfolio_url={user.portfolio_url}
        />
      )}
    </div> 
  ))}
  </div>
)}

{/*  3. Search using year of passing (UG)  */}

{alumniByPassing && (
  <div className='max-w-4xl lg:mx-32 py-12'> {verified_alumni.map((user) => (
    <div key={user._id}> { user.passing_year ==  parseInt(passingYear)  && (
      <AlumniComponent key={user._id} _fullName={user.name} _email={user.email} 
      _sex={user.sex} _ugAdmissionYear={user.admission_year} _ugPassingYear={user.passing_year} 
      _currentCity={user.current_city} _currentOccupation={user.current_occupation}
      _currentCompany={user.company_or_org} _yearsOfExperience={user.yrs_of_experience}
            
      _anyDegreeAfterUG={user.any_degree_after_ug} _lastDegree={user.pg_degree}
      _lastDegreeSpecialization={user.pg_specialization} _pgAdmissionYear={user.pg_admissionYear} 
      _pgPassingYear={user.pg_passingYear} 
            
      _facebook_url={user.facebook_url}
      _instagram_url={user.instagram_url}
      _twitter_url={user.twitter_url}
      _linkedin_url={user.linkedin_url}
      _github_url={user.github_url}
      _portfolio_url={user.portfolio_url}
        />
      )}
    </div> 
  ))}
  </div>
)}



{/* Default View */}
<div className='max-w-4xl lg:mx-32 py-12'>
<div className='ml-4 my-8'>
<h1 className="text-5xl font-extrabold text-emerald-400">Recently Approved Member</h1>
<p className="text-gray-400 text-base mt-2">Here is the list of recently verified member of the Department of Computer Science - Gurucharan College, Silchar.</p>
</div>
{verified_alumni.length == 1 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
</>)}

{verified_alumni.length == 2 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
</>)}

{verified_alumni.length == 3 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />

</>)}


{verified_alumni.length == 4 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />

</>)}

{verified_alumni.length == 5 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />

</>)}

{verified_alumni.length == 6 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={6} />

</>)}


{verified_alumni.length == 7 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={6} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={7} />

</>)}

{verified_alumni.length == 8 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={6} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={7} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={8} />

</>)}


{verified_alumni.length == 9 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={6} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={7} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={8} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={9} />

</>)}

{verified_alumni.length >= 10 && (<>
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={1} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={2} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={3} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={4} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={5} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={6} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={7} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={8} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={9} />
  <DefaultLatestTenAlumni verified_alumni={verified_alumni} num={10} />
</>)}

</div>









{/* Ending-----------------------------> */}
  </div>
  )
}







export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }
  let verified_alumni = await VerifiedAlumni.find();
  // These will be passed to the page component as props
  return {
    props: {
      verified_alumni: JSON.parse(JSON.stringify(verified_alumni)),
    }, 
  };
}

export default alumni
