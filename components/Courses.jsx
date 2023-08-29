import React from 'react'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className='border-2 border-gray-500 rounded-md w-[500px] h-[20rem] p-8'>
        <h2 className='text-center text-xl font-semibold text-white'>B.Sc in  Computer Science</h2>
        <h3 className='text-center text-md  text-white'>Duration: 3 Yrs</h3>
        <p className='text-justify mx-6 text-white mt-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus molestiae eos deserunt, illo deleniti dolore dicta quia delectus similique culpa fugiat animi magnam officia, illum, at impedit nam consequatur.
        </p>
        <Link href="/" download={'BSc-CS-Syllabus.pdf'}>Download Syllabus</Link>
      
    </div>
  )
}

export default Courses
