import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { RiUserLocationFill } from 'react-icons/ri'
import { FaUserGraduate } from 'react-icons/fa'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsGlobe2 } from 'react-icons/bs'

const AlumniComponent = ({ 
  _fullName, 
  _email,
  _sex, 
  _ugAdmissionYear, 
  _ugPassingYear, 
  _currentCity, 

// Current occupations
  _currentOccupation,
  _currentCompany,
  _yearsOfExperience,

// PG Degree of any other degree 
  _anyDegreeAfterUG,
  _lastDegree,
  _lastDegreeSpecialization,
  _pgAdmissionYear, 
  _pgPassingYear, 

  
// Scoial Medias
  _twitter_url,
  _linkedin_url,
  _facebook_url,
  _instagram_url,
  _github_url,
  _portfolio_url,


}) => {
 

return (
    <>      
      <div className='container flex flex-col md:flex-row self-center md:self-start bg-black/30 border border-gray-600 rounded-lg my-4 md:mx-5 p-4 text-white'>
        <div className='w-32 m-2 mr-5 self-center md:self-start'>
          <Image unoptimized src={_sex === 'Male' ? "/MaleAvatar.png" : "/FemaleAvatar.png"} 
            alt="avatar" width={100} height={100} className='rounded-full' />
        </div>
        
        
        <div className='container flex flex-col justify-center space-y-2 m-2'>
          
          <div className='flex flex-row font-semibold text-xl'>
              <h2 className='text-xl font-semibold flex flex-wrap self-center'>{_fullName} <p className='text-sm text-gray-500 font-normal ml-2'> ({_currentOccupation}) </p></h2>
          </div>
          <div className='flex flex-wrap gap-6'>
                    <span className='text-sm text-gray-400 font-medium flex flex-nowrap align-bottom'> 
                      <FaUserGraduate size={18} className='self-center' />  <p className='ml-1 pt-1 self-end'>{_ugAdmissionYear} - {_ugPassingYear}</p> 
                    </span>

                    <span className='text-sm text-gray-400 font-medium flex flex-nowrap align-bottom'> 
                      <RiUserLocationFill size={20} className='self-center' />  <p className='ml-1 pt-1 self-end'>{_currentCity}</p> 
                    </span>
                </div>

         
          <details className='text-base w-fit '>
            <summary className='cursor-pointer my-4'><span className='bg-purple-900 py-1.5 px-4 rounded-md w-fit'>More details</span></summary>
            <div className='container m-2 flex flex-col space-y-2'>
            
                <p className='text-md font-medium'>_occupation:&ensp; 
                  <span className='font-medium text-gray-400'>{_currentOccupation}</span>
                </p>
                { _currentOccupation === 'Employed' && (
                    <>
                      <p className='text-md font-medium'>_company / organization:&ensp; 
                        <span className='font-bold'>{_currentCompany}</span>
                      </p>
                  
                      <p className='text-md font-medium'>_experience:&ensp; 
                        <span className='font-bold'>{_yearsOfExperience}</span>&ensp;years+
                      </p>
                    </>
                )}

                { _currentOccupation === 'Business' && (
                    <>
                      <p className='text-md font-medium'>_company / organization:&ensp; 
                        <span className='font-bold'>{_currentCompany}</span>
                      </p>
                  
                      <p className='text-md font-medium'>_experience:&ensp; 
                        <span className='font-bold'>{_yearsOfExperience}</span>&ensp;years+
                      </p>
                    </>
                )}

                { _currentOccupation === 'Teacher/Professor' && (
                    <>
                      <p className='text-md font-medium'>_company / organization:&ensp; 
                        <span className='font-bold'>{_currentCompany}</span>
                      </p>
                  
                      <p className='text-md font-medium'>_experience:&ensp; 
                        <span className='font-bold'>{_yearsOfExperience}</span>&ensp;years+
                      </p>
                    </>
                )}
             
                  
                {_anyDegreeAfterUG === 'Yes' && (
                <>
                  <p className='text-md font-medium'>_recent degree:&ensp; 
                    <span className='font-bold'>{_lastDegree}</span>
                  </p>
                  
                  <p className='text-md font-medium'>_specialization:&ensp; 
                    <span className='font-bold'>{_lastDegreeSpecialization}</span>
                  </p>

                  <p className='text-md font-medium'>_batch:&ensp; 
                    <span className='font-bold'>{_pgAdmissionYear} - {_pgPassingYear}</span>
                  </p>
                </>
                )}  
                
                  
                <p className='text-md font-medium'>_email:&ensp; 
                  <span className='font-medium text-gray-400'><Link href={`mailto:${_email}`} className="cursor-pointer hover:text-blue-500 hover:underline">{_email}</Link></span>
                </p>   
            
            </div>
            <div className='flex flex-row mt-4 mx-2 space-x-5'>
              {_facebook_url.length > 0 && (
                <Link href={_facebook_url} className="cursor-pointer"><BsFacebook size={20} /></Link>
              )}

              {_instagram_url.length > 0 && (
                <Link href={_instagram_url} className="cursor-pointer"><BsInstagram size={20} /></Link>
              )}

              {_linkedin_url.length > 0 && (
                <Link href={_linkedin_url} className="cursor-pointer"><BsLinkedin size={20} /></Link>
              )}

              {_twitter_url.length > 0 && (
                <Link href={_twitter_url} className="cursor-pointer"><BsTwitter size={20} /></Link>
              )}

              {_github_url.length > 0 && (
                <Link href={_github_url} className="cursor-pointer"><BsGithub size={20} /></Link>
              )}

              {_portfolio_url.length > 0 && (
                <Link href={_portfolio_url} className="cursor-pointer"><BsGlobe2 size={20} /></Link>
              )}
              
              
              
              
            </div>
          </details>
        </div>
      </div>
    </>
  )
}

export default AlumniComponent
