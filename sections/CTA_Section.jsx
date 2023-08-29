import React from 'react'
import Image from 'next/image'



const CTA_Section = () => {
  return (

    <div className="gap-16 items-center py-8 mt-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About the CSxCommunity.</h2>
            <p className="mb-4">A dedicated platform that showcases the illustrious alumni and current students from the Department of Computer Science at Gurucharan College. Here, you can explore the profiles of our esteemed alumni, featuring their names, contact information, occupations, and more. Connect with the accomplished professionals who have graduated from our department and have embarked on diverse career paths beyond technology and innovation.
</p>
            <p> Discover the wide-ranging expertise and accomplishments of our alumni community, from industry leaders to entrepreneurs, educators to researchers, and more. </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image unoptimized  
            width={100}
            height={300}
            className="w-full rounded-lg" 
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" 
            alt="office content 1" />
            <Image unoptimized  
            width={100}
            height={300}
            className="mt-4 w-full lg:mt-10 rounded-lg" 
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" 
            alt="office content 2" />
        </div>
    </div>

  )
}

export default CTA_Section
