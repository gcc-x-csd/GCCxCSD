import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsInstagram, BsGlobe2 } from 'react-icons/bs'

const Developer = ({ image, name, role, email, facebook, instagram, twitter, github, linkedin, portfolio }) => {
  return (
    <div className="items-center m-auto w-[40rem] max-w-3xl rounded-lg shadow sm:flex bg-gray-800 border-gray-700">
              <Link href="#">
                  <Image unoptimized width={100} height={100} 
                  className="w-[170px] h-[170px] aspect-square rounded-lg sm:rounded-none sm:rounded-l-lg" 
                  src={image} alt={name} />
              </Link>
              <div className="ml-2 p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <Link href="#">{name}</Link>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">{role}</span>
                  <p className="mt-1 mb-4 font-light text-gray-500 dark:text-gray-400">{email}</p>
                  <ul className="flex space-x-4 sm:mt-0">
                      <li>
                          <Link href={facebook} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsFacebook size={20} />
                          </Link>
                      </li>
                      <li>
                          <Link href={instagram} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsInstagram size={20} />
                          </Link>
                      </li>
                      <li>
                          <Link href={linkedin} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsLinkedin size={20} />
                          </Link>
                      </li>
                      <li>
                          <Link href={twitter} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsTwitter size={20} />
                          </Link>
                      </li>
                      <li>
                          <Link href={github} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsGithub size={20} />
                          </Link>
                      </li>
                      <li>
                          <Link href={portfolio} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsGlobe2 size={20} />
                          </Link>
                      </li>
                  </ul>
              </div>
          </div> 
  )
}

export default Developer
