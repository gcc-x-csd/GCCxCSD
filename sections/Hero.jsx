import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { MdAttachEmail, MdWallpaper } from 'react-icons/md';
import { BsGithub, BsFacebook} from 'react-icons/bs'
import { HiArrowSmRight } from 'react-icons/hi'
import { getUID } from '@/CookieHelper'


const Hero = () => {
  const [userID, setUserID] = useState()
  useEffect(() => {
    setUserID(getUID('gccxcsd_JWT'));
  }, [])
  

  return (
    <div>
      <section className="bg-transparent">
        <div className="flex flex-col justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:pb-8 lg:px-12">
        {userID ? (
          ''
        ) : (
        <Link href="/register" role="alert"
        className="inline-flex w-fit self-center justify-between items-center py-1 px-1 pr-4 mb-7 text-md  rounded-full text-white bg-gray-500/30 hover:bg-gray-800" >
        <span className="text-md font-semibold bg-purple-800 rounded-full text-white px-4 py-1.5 mr-3">Alumni? </span>
        <span className="text-md font-semibold">Register as Alumni</span>
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </Link>
      )}  
          
    

          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none  sm:text-3xl md:text-6xl lg:text-7xl text-white">
          Welcome to GCC<span className="text-red-600 font-bold mb-1">x</span>CSD 
          </h1>
          <p className="mb-8 text-md font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-20 dark:text-gray-400">
            An official website of the Department of Computer Science - Gurucharan College, Silchar. Here, you can explore the rich history and achievements of our esteemed department, get to know our experienced faculty members and their expertise, browse through our photo gallery, and learn more about the courses offered in our department. 
          </p>


          <div className="flex flex-col mb-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800">
             Explore more <HiArrowSmRight size={24} color="white" className="ml-2" />
            </Link>
            <Link href="/gallery"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <MdWallpaper size={28} color='white' className="mr-2" /> CSxGallery
            </Link>
          </div>

          
{/* SOCIAL MEDIAS */}
          <div className="flex my-4 space-x-6 justify-center">
                        
                  <Link href="mailto:gccxcsd@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <MdAttachEmail size={35} />
                  </Link>

                  <Link href="https://www.facebook.com/computersciencedept" 
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <BsFacebook size={30} />
                  </Link>

                  <Link href="https://github.com/gcc-x-csd" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <BsGithub size={30} />
                  </Link>
                        
          </div>



{/* COMPANIES */}
          <div className="px-4 my-20 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase"> Our Alumni are employed in </span>
            <div className="flex flex-wrap gap-8 justify-center items-center mt-4 text-gray-500 sm:justify-between">
              
              {/* AMAZON */}
                    <Image unoptimized src='/company_logos/amazon.png' alt="Amazon"
                      width={100}
                      height={50}
                      className="mix-blend-exclusion w-fit h-16 grayscale" 
                    />
      
              {/* INTEL */}
                    <Image unoptimized src='/company_logos/intel.png' alt="Intel" 
                     width={100}
                     height={50}
                     className="grayscale"
                    />
      
              {/* INFOSYS */}
                    <Image unoptimized src='/company_logos/infosys.png' alt="Infosys" 
                     width={100}
                     height={50}
                     className="grayscale"
                    />
      
              {/* MICROSOFT */}
                    <Image unoptimized src='/company_logos/microsoft.png' alt="MicroSoft"
                     width={100}
                     height={100}
                     className="h-28 w-fit grayscale" 
                     />
      
              {/* IBM */}
                    <Image unoptimized src='/company_logos/ibm.png' alt="IBM" 
                     width={80}
                     height={50}
                     className="w-fit h-10 grayscale"
                    />
      
              {/* DELOITTE */}
                    <Image unoptimized src='/company_logos/deloitte.png' alt="Deloitte" 
                     width={100}
                     height={50}
                     className="w-fit h-8 grayscale"
                    />
      
              {/* WALMART */}
                    <Image unoptimized src='/company_logos/walmart.png' alt="Walmart"
                     width={100}
                     height={50}
                     className="w-fit h-14 grayscale" 
                     />
      
              {/* TCS */}
                    <Image unoptimized src='/company_logos/tcs.png' alt="TCS"
                     width={100}
                     height={50}
                     className="h-14 grayscale" 
                     />
          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
