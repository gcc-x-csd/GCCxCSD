import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full z-10 hidden md:block'>
        <ul className='flex md:gap-10 justify-center bg-gradient-to-r from-black to-indigo-950  text-white text-md py-2'>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-cyan-500'>Home</li>
            </Link>
    <details>
        <summary className='cursor-pointer  hover:border-purple-600'>CSxResources</summary>
            <div className='bg-gray-950 ml-2 mt-1 py-1 absolute rounded-md'>
                <Link href='/cs-x-resources/pyqp'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPYQPs</li>
                </Link>
                <Link href='/cs-x-resources/library'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxLibrary</li>
                </Link>
                <Link href='/cs-x-resources/practicals'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPracticals</li>
                </Link>
            </div>
    </details> 

            <Link href='/eventblog'>
                <li className='hover:border-b-2 hover:border-cyan-500'>Blog</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-cyan-500'>CSxAlumni</li>
            </Link>
            <Link href='/gallery'>
                <li className='hover:border-b-2 hover:border-cyan-500'>Gallery</li>
            </Link>
            <Link href='/about'>
                <li className='hover:border-b-2 hover:border-cyan-500'>About</li>
            </Link>
        </ul>
      
    </div>
  )
}

export default Navbar
