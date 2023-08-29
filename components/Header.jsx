import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getName, getEmail, getUID, getSex } from '@/CookieHelper';


const Header = () => {

const [userName, setUserName] = useState()
const [userEmail, setUserEmail] = useState()
const [userID, setUserID] = useState()
const [userSex, setUserSex] = useState()


useEffect(() => {
  setUserName(getName('gccxcsd_JWT'))
  setUserEmail(getEmail('gccxcsd_JWT'))
  setUserID(getUID('gccxcsd_JWT'))
  setUserSex(getSex('gccxcsd_JWT'))
}, [])
 
  

  return (
      <div className='sticky top-0 z-10 w-full bg-gradient-to-r from-black to-indigo-950'>    
        <nav >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <Link href="/" className="flex items-center">
                  <Image 
                  alt="GCCxCSD Logo" 
                  
                  src='/logo.png'
                  width={40}
                  height={40} 
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      GCC<span className='text-red-600 font-bold mb-1'>x</span>CSD
                  </span>
                </Link>



  <div className="flex items-center md:order-2">
 
      {/* <button type="button" className="flex text-sm bg-gray-800 mr-2 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-cyan-600" name='showProfileMenu' onClick={handleDropdown}>
       
       
      </button> */}

      <details>
        <summary className='cursor-pointer text-white  hover:text-cyan-400 list-none'> 
                <Image 
                unoptimized
                src={userSex ? `/${userSex}Avatar.png` :'/user.png'}
                alt="user photo"
                width={40}
                height={40}
                className="w-8 h-8 rounded-full" 
                />
        </summary>

        
  <div className={`z-50 my-4 absolute top-10  right-40 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:divide-gray-600 transition-all`}>
      
      
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">{userName ? userName : 'Guest'}</span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userEmail ? userEmail : `You're not logged in!`}</span>
      </div>
      
      <ul className="py-2">
        
        
      {
        userEmail ? (
          <>
          <li>
          <Link href={`/user/${userID}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            My Profile
          </Link>
        </li>
          <li>
          <form action="/api/auth/logout" method='POST'>
          <button type="submit" 
            className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-left">
              Log out
          </button>
          </form>
        </li>
        </>
        ) : (
          <li>
          <Link href="/login" 
            className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Log in
          </Link>
        </li>
        )
      }       

      </ul>
    </div>
      </details>





      <button type="button" className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

  </div>



{/* SIDE BAR */}



















































  <div className="items-center justify-between hidden w-fit pr-20 md:flex md:w-auto md:order-1">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <Link href="/" className="block py-2 pl-3 pr-4 text-white md:p-0 hover:text-cyan-400">Home</Link>
      </li>
      <li>
      <details>
        <summary className='cursor-pointer text-white  hover:text-cyan-400'>Resources</summary>
            <div className='bg-gray-950 ml-2 mt-1 py-1 absolute rounded-md'>
                <Link href='/cs-x-resources/pyqp'>
                    <li className='text-white  hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPYQPs</li>
                </Link>
                <Link href='/cs-x-resources/library'>
                    <li className='text-white  hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxLibrary</li>
                </Link>
                <Link href='/cs-x-resources/practicals'>
                    <li className='text-white  hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPracticals</li>
                </Link>
                
            </div>
    </details>  
      </li> 
      
      <li>
        <Link href="/gcsc" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">GCSC</Link>
      </li>
      <li>
        <Link href="/alumni" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</Link>
      </li>
      <li>
        <Link href="/eventblog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
      </li>
      <li>
        <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
  )
}


export default Header
