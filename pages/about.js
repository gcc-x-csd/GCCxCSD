import React from 'react'
import RankHolder from '@/model/RankHolder'
import { FacultyMemberCard, ImageSlider, SubHeader } from '@/components'
import Image from 'next/image'
import { RankersList, MeetDevelopers } from '@/sections'
import mongoose from 'mongoose'
import { aboutSliderImages } from '@/util'

const about = ({ rank_holders }) => {

  return (
    <>
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-auto'>
    <SubHeader gradientText='CSx' text='About.' 
      metaDescription='Here, you can find more information regarding the Department of Computer Science - Gurucharan College, Silchar' />
      
  
      <ImageSlider imagesArray={aboutSliderImages} />
      <p className='max-w-7xl ml-32 text-slate-400 text-justify mt-6 p-4 font-extralight text-lg'>
      Founded on July 15th, 1935, Gurucharan College is a renowned institution for higher education in the eastern region of India. Over the years, it has established itself as a leading center for academic excellence, and in 2007, the Department of Computer Science was established, adding a new dimension to the college&apos;s offerings. The department is equipped with a state-of-the-art computer lab and offers self-financing courses in Computer Science, including B.Sc. - Pass & Honours. Initially, the department had a seat capacity of only 14, but due to the increasing demand for Computer Science education, the capacity has been raised to the current level of 60. Despite the increase in seat capacity, the department has maintained a strong focus on quality education and has consistently produced students who have achieved top positions in TDC examinations.
      <br /> <br />
The success of the department&apos;s graduates speaks for itself, as many alumni are now employed in prestigious software companies such as 
<strong className='text-pink-500 font-bold text-xl'> Amazon</strong>, 
<strong className='text-pink-500 font-bold text-xl'> IBM</strong>, 
<strong className='text-pink-500 font-bold text-xl'> TCS</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Wipro</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Intel</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Infosys</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Walmart</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Deloitte</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Cognitech</strong>, 
<strong className='text-pink-500 font-bold text-xl'> Ellenox</strong>, both in India and abroad, as well as in various other fields. Some students from the department are also pursuing research in diverse areas, showcasing the department&apos;s commitment to fostering innovation and excellence.
      <br /> <br />
In 2016, the department further enhanced its reputation with the addition of the Diploma in Computer Application (DCA) program, which has provided students with additional opportunities for skill development and specialization. Moreover, the Department of Computer Science takes pride in the recent establishment of the GC CS Students&apos; Club (GCSC) in 2022, which has significantly enriched the learning environment for students. The GCSC promotes skill development in technology and other domains, fostering the growth of new talent and creating a vibrant community of computer science enthusiasts.

With its dedication to providing quality education, state-of-the-art facilities, and a track record of producing successful graduates, the Department of Computer Science at Gurucharan College continues to be a pioneer in computer education in the eastern region of India, shaping the future of aspiring computer science professionals.

      </p>


      {/* Faculty Members - Teaching and Non-Teaching Staffs Details */}
        <h2 className='text-white text-3xl font-semibold text-center mt-40'>Faculty</h2>
        <hr className='mx-64 mt-2 mb-8 border-gray-600' />
        
        <div className='flex flex-col justify-center align-middle'>
          <div className='flex w-full justify-center gap-8 flex-wrap'>
            
            <FacultyMemberCard dp_logo_url='/user.png' name='Dr. O. Mema Devi' 
            designation='HOD & Assistant Professor' qualification='M.Sc - CS, Ph.D' 
            specialization='Fuzzy Pattern Recognition Techniques' joining_year='2007' 
            email='o.mema.devi12@gmail.com' contact='+91-9435522900' cv='dr_o_mema_devi_cv.pdf'/>

            <FacultyMemberCard dp_logo_url='/user.png' name='Dr. Abhijit Paul' 
            designation='Assistant Professor' qualification='MCA, M.Phil, Ph.D'
            specialization='Natural Language Processing' joining_year='2009'
            email='abhijitpaul16@gmail.com' contact='+91-9864410649' cv='dr_abhijit_paul_cv.pdf' />
          
          </div>
          <div className='flex w-full justify-center gap-8 mt-6 flex-wrap'>

            <FacultyMemberCard dp_logo_url='/user.png'  name='Mrs. Deepanjali Paul' 
            designation='Assistant Professor' qualification='MCA'
            specialization='Networking' joining_year='2009'
            email='null' contact='+91-9706296409' cv='mrs_deepanjali_paul_cv.pdf' />
            
            <FacultyMemberCard dp_logo_url='/user.png' name='Mr. Wahid Mustafa Mazumder' 
            designation='Assistant Professor' qualification='M.Sc - CS'
            specialization='Ad-hoc Networking' joining_year='2011'
            email='wahid88@rediffmail.com' contact='+91-9401338424' cv='mr_wahid_mazumder_cv.pdf' />
          
          </div>

            <div className='flex w-full justify-center gap-8 mt-8 flex-wrap'>
              <div className='bg-[#050720b3] hover:bg-[#050720] w-[30rem] rounded-lg mt-6 transition-all duration-300'>
                <div className='w-full flex flex-col items-center justify-center p-4'>
                  <Image unoptimized
                    src='/user.png'
                    alt='DP'
                    width={140}
                    height={140}
                  />
                <h1 className='text-purple-500 text-xl font-semibold'>Sri Bijan Das</h1>
                <div className='my-4 border-t-[1px] w-[25rem] border-cyan-800 py-4'>
                  <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Designation:</strong>Bearer</p>
                  <p className='text-gray-500 text-md'><strong className='text-gray-400 mr-2'>Experience:</strong>{new Date().getFullYear()-2008} Yrs+</p>
                  <details>
                    <summary className='text-cyan-400 text-md mt-4 cursor-pointer w-fit'>Contact Info</summary>  
                      <div className='bg-slate-950 ml-2 mt-2 p-2 px-4 absolute rounded-md'>
                        <p className='text-gray-400 text-sm my-1'><strong className='text-gray-300 mr-2'>Mobile:</strong>+91-1234567890</p>
                      </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

   



    {/* List of Rank Holders */}
          <h2 className='text-white text-3xl font-semibold text-center mt-28'>Rank Holders</h2>
          <hr className='mx-64 mt-2 mb-8 border-gray-600' />
          <RankersList rank_holders={rank_holders} />

          <MeetDevelopers />

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) { 
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }
  let rank_holders = await RankHolder.find();

  // These will be passed to the page component as props
  return {
    props: {
      rank_holders: JSON.parse(JSON.stringify(rank_holders)),
    }, 
  };
}

export default about
