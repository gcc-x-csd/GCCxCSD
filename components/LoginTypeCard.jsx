import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LoginTypeCard = ({route_URL, name, logo_url, alt_text, description}) => {
  return (
    <div>
         <Link href={route_URL}>
          <div className='bg-gray-950 w-[280px] h-[350px] sm:w-[500px] sm:h-[280px] md:w-[700px] lg:w-[400px] lg:h-[300px] rounded-md p-2 my-6 transition-all hover:-translate-y-2  hover:border-purple-600 hover:border-2'>
              
              <div className='w=[100%] flex justify-center align-middle mt-8'>
                  <Image unoptimized
                    src={logo_url}
                    alt={alt_text}
                    width='100'
                    height='100'
                  />
              </div>
            <h3 className='text-center text-xl font-semibold text-white my-4'>{name}</h3>
            <p className='text-red-700 text-center text-sm px-3'>{description}</p>
          </div>
      </Link>
      
    </div>
  )
}

export default LoginTypeCard
