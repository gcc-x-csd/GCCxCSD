import React from 'react'

const SubHeader = ({ gradientText, text, metaDescription }) => {
  return (
    <div className='lg:px-36 py-8 flex flex-col justify-center align-middle'>
      <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 ">{gradientText}</span> {text}</h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{metaDescription}</p>
    </div>
  )
}

export default SubHeader
