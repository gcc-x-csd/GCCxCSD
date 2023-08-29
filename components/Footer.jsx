import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { MdAttachEmail } from 'react-icons/md'


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-indigo-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" 
                            unoptimized
                            width={60}
                            height={60}
                            alt="GCCXCSD Logo" />
                            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                            GCC<span className='text-red-600 font-bold mb-1'>x</span>CSD
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                    <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Department</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/admin_login" className="hover:underline ">Admin Login</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/protected_view" className="hover:underline ">Protected Access</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/about" className="hover:underline">About</Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/cs-x-resources/pyqp" className="hover:underline">CSxPYQPs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/cs-x-resources/library" className="hover:underline">CSxLibrary</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/cs-x-resources/practicals" className="hover:underline">CSxPracticals</Link>
                                </li>
                            </ul>
                        </div>
                        


                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GCS Club</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Mission &amp; Vision</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">CSxBlog</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Join Discord!</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy;{new Date().getFullYear()}&ensp;-&ensp;  
                    <Link href="/" className="hover:text-cyan-500 hover:underline">GCCxCSD</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        
                        <Link href="mailto:gccxcsd@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <MdAttachEmail size={24} />
                        </Link>

                        <Link href="https://www.facebook.com/computersciencedept" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsFacebook size={20} />
                        </Link>


                        <Link href="https://github.com/gcc-x-csd" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <BsGithub size={20} />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
