import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FacultyMemberCard = ({ dp_logo_url, name, designation, qualification, specialization, joining_year, email, contact, cv }) => {
  return (
    <div className='bg-[#050720b3] hover:bg-[#050720] w-[30rem] rounded-lg mt-8 transition-all duration-300'>
      <div className='w-full flex flex-col items-center justify-center p-4'>
      <Image unoptimized
        src={dp_logo_url}
        alt='DP'
        width={140}
        height={140}
      />
      <h1 className='text-purple-500 text-xl font-semibold'>{name}</h1>
      <div className='my-4 border-t-[1px] w-[25rem] border-cyan-800 py-4'>
        <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Designation:</strong>{designation}</p>
        <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Qualification:</strong>{qualification}</p>
        <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Specialization:</strong>{specialization}</p>
        <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Experience:</strong>{new Date().getFullYear()-joining_year} Yrs+</p>
        <details>
          <summary className='text-cyan-400 text-md cursor-pointer mt-4 w-fit'>More Info</summary>  
          <div className='bg-slate-950 ml-2 mt-2 p-2 px-4 absolute rounded-md'>
            <p className='text-gray-400 text-sm my-1'><strong className='text-gray-300 mr-2'>Email:</strong><Link href={`mailto:${email}`} className='hover:text-blue-500 hover:underline'>{email}</Link></p>
            <p className='text-gray-400 text-sm my-1'><strong className='text-gray-300 mr-2'>Mobile:</strong>{contact}</p>
            <p className='text-gray-400 text-sm my-1'><strong className='text-gray-300 mr-2'>Bio:</strong><Link href={`/cv/${cv}`} download={`${cv}`} className='hover:text-blue-500 hover:underline'>Download CV</Link></p>
          </div>
        </details>
      </div>
      </div>
    </div>
  )
}

export default FacultyMemberCard
