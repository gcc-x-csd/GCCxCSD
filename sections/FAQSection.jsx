import React from 'react'
import { FAQ } from '@/components'
import { FaQuestionCircle } from 'react-icons/fa'

const FAQSection = ({ faq }) => {
  return (
    <section className="py-20">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions (FAQs)</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          
{/* Left Side Latest 5 */}
        <div>
             

            <FAQ question='What do you mean by Figma assets?'
             answer='You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.' />
           

            <FAQ question='What does lifetime access exactly mean?'
             answer='Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.' />

            <FAQ question='What do you mean by Figma assets?'
            answer='You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.' />
           
        </div>


{/* Right side --> len/2 to -5 */}
        <div>
            <FAQ question='What do you mean by Figma assets?'
            answer='You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.' />
           

            <FAQ question='What does lifetime access exactly mean?'
            answer='Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.' />
              
          </div>


      </div>
  </div>
</section>
  )
}

export default FAQSection
