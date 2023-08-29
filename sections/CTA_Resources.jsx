import React from 'react'
import Image from 'next/image'


const CTA_Resources = () => {
  return (

    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
     
      <Image 
      className="w-full  hidden dark:block" 
      width={200}
      height={200}
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" 
      // src='/cta.png'
      // src='/GCSCLogo.jpg'
      alt="illustration" />

      <div className="mt-4 md:mt-0">
        <h2 className="flex mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Club that brings all tech enthusiast students together.
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">The GCSC (GC CS Students&apos; Club) is a proactive and student-driven organization that embodies the vision of fostering a culture of community-oriented learning and development within the institute and beyond.</p>
        <a href="#" className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">
          Visit GCSC
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>

  )
}

export default CTA_Resources
