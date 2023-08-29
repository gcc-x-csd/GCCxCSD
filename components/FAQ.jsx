import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'


const FAQ = ({question, answer}) => {
  return (
    <div className="mb-12">
        <h3 className="flex items-center align-middle mb-4 text-lg font-medium text-gray-900 dark:text-white">
            <FaQuestionCircle size={24} className='mr-2 text-green-400'/>
            <p className='self-center'>{question}</p>
        </h3>
        <p className="text-gray-500 dark:text-gray-400">{answer}</p>
    </div>
  )
}

export default FAQ
