import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import mongoose from 'mongoose';

import { BiEdit } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { MdCall } from 'react-icons/md'
import { FaUserGraduate, FaUniversity } from 'react-icons/fa'
import { GiTiedScroll } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsGlobe2 } from 'react-icons/bs'

import VerifiedAlumni from '@/model/VerifiedAlumni';
import { UpdateSocialMediaURL, UpdateBasicInfo, UpdatePGDetails, UpdateCurrentOccupation } from '@/components';
import { getSex, getName, getEmail, getUID } from '@/CookieHelper';


export default function UpdateProfile({ verified_alumni }) {
  const router = useRouter();
  const { id } = router.query;

const [userID,setUserID] = useState()  
const [userName, setUserName] = useState()
const [userSex, setUserSex] = useState()
const [userEmail, setUserEmail] = useState()


useEffect(() => {
  setUserName(getName('gccxcsd_JWT'))
  setUserSex(getSex('gccxcsd_JWT'))
  setUserEmail(getEmail('gccxcsd_JWT'))
  setUserID(getUID('gccxcsd_JWT'))
}, [])

   
const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
  
        // Sends data over a server
          try {
            const { data } = await axios({
              url: "/api/updateusers",
              method: "POST",
              data: form_values
              })
  
          } catch (error) {
              console.log("Error!");
          }     
  }



// View Edit form
const [showEditForm, setShowEditForm] = useState(false)

const viewEditForm = () => {
    setShowEditForm(!showEditForm);
}
  

  return (
    <div>
        <div className="bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-full pt-12 flex flex-col">
      <form action="/api/updateusers" method="POST" 
        className="bg-gray-950/80 px-2 h-auto w-[90%] md:w-[70%] my-4 rounded-md flex flex-col justify-center items-center self-center">
       
       <div className='flex align-middle gap-6 w-[90%] mt-4 py-8'>
       <Image src={userSex ? `/${userSex}Avatar.png` :'/user.png'} unoptimized
          alt="alumni-update-form"
          width={140}
          height={140}
        />

        <div className='flex flex-col mt-3'>
            <h1 className="pb-2 text-left font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-cyan-400  via-indigo-800  to-emerald-500 ">
                {userName}
            </h1>
            <p className="text-cyan-400 tracking-wide text-sm">{userEmail}</p>
            <button type='button' onClick={viewEditForm} className='flex gap-1 bg-red-800 hover:bg-red-900 px-2 py-1 rounded-md w-fit text-white mt-4'>
                {showEditForm ? (<>
                    <p className='self-center text-sm'>Cancel Edit</p> <RxCross2 size={18} color='white' className='self-center' />
                </>) : (<>
                    <p className='self-center text-sm'>Edit Profile</p> <BiEdit size={20} color='white' className='self-center' />       
                </>)}
            </button>
            
        </div>
       </div>


       {!showEditForm && (
            <div className="flex w-[60%] flex-col justify-center mb-3">
                {verified_alumni.map((user) => (
                    <div key={user._id}> {user._id == id && (<>
                    <div className='text-white'>
                        <p className='flex gap-2 my-1'><MdCall size={22} color='cyan' /> {user.mobile_no}</p>
                        <p className='flex gap-2 my-1'><FaUserGraduate size={20} color='cyan' /> Batch: {user.admission_year} - {user.passing_year}</p>
                        <p className='flex gap-2 my-1'><GiTiedScroll size={20} color='cyan' />B.Sc (Hons) - Computer Science</p>
                        <p className='flex gap-2 my-1'><FaUniversity size={20} color='cyan' />Gurucharan College, Silchar</p> 
                        <p className='flex gap-2 my-1'><IoLocationSharp size={20} color='cyan' />{user.current_city}</p> 
                    </div>

                    <div className='flex flex-row my-4 space-x-5'>
                        {user.facebook_url.length > 0 && (
                          <Link href={user.facebook_url} className="cursor-pointer"><BsFacebook size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}

                        {user.instagram_url.length > 0 && (
                          <Link href={user.instagram_url} className="cursor-pointer"><BsInstagram size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}

                        {user.linkedin_url.length > 0 && (
                          <Link href={user.linkedin_url} className="cursor-pointer"><BsLinkedin size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}

                        {user.twitter_url.length > 0 && (
                          <Link href={user.twitter_url} className="cursor-pointer"><BsTwitter size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}

                        {user.github_url.length > 0 && (
                          <Link href={user.github_url} className="cursor-pointer"><BsGithub size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}

                        {user.portfolio_url.length > 0 && (
                          <Link href={user.portfolio_url} className="cursor-pointer"><BsGlobe2 size={20} className='text-white hover:text-cyan-400' /></Link>
                        )}
                    </div>
                    
                </>)}
            </div>
            ))}
        </div>
       )}

        
        {showEditForm && (<>
            <div className="flex w-[90%] flex-col justify-center mb-3">
            { verified_alumni.map((user) => (
            <div key={user._id}>
                { user._id == userID && (
                    <div>
                        <UpdateBasicInfo user={user} />
                        <UpdatePGDetails user={user} />
                        <UpdateCurrentOccupation user={user} />
                        <UpdateSocialMediaURL user={user} />
                    </div>
                )}
            </div>
           ))
            }

                <hr className="border-gray-700 w-full my-8" />
            </div>

            <div className="flex gap-4 justify-end w-full mr-28">
              <button type="button" onClick={viewEditForm}
              className="bg-red-900 text-lg text-white w-40 p-2 font-semibold my-12 rounded-md hover:bg-red-950 transition-all" >
               Cancel
              </button>
              <button type="submit" onSubmit={handleSubmit}
              className="bg-green-900 text-lg text-white w-40 p-2 font-semibold my-12 rounded-md hover:bg-green-950 transition-all" >
               Update profile
              </button>
            </div>
            </>
            )}
        </form>
    </div>
</div>
  );
}


export async function getServerSideProps(ctx) {

  
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