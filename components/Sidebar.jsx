import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'


const Sidebar = () => {

const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <aside className="md:hidden">
      {showSidebar ? (
        <button type="button" className=" text-white cursor-pointer fixed left-10 top-10 z-50" onClick={handleSidebarToggle}>
          <RxCross1 size={28} color='white' />
        </button>
      ) : (
        <button type="button" className="flex items-center cursor-pointer fixed z-30 left-10 top-10" onClick={handleSidebarToggle}>
          <GiHamburgerMenu size={28} color='white' />
        </button>
      )}
      <div className={`top-0 right-0 w-full bg-black p-10 pl-12 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}>
        <h1 className="font-extrabold text-[30px] leading-[30px] text-white text-center">GCC <span className="text-[#D61818]">x</span> CSD</h1>
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
        <Link href="/eventblog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
      </li>
      <li>
        <Link href="/gallery" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">GCSC</Link>
      </li>
      <li>
        <Link href="/alumni" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Alumni</Link>
      </li>
      <li>
        <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
    </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
