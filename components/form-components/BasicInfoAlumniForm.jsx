import React, { useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'

const BasicInfoAlumniForm = () => {


  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <div className='w-full'>
      <h1 className="mt-20 text-center font-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-green-600 from-10% via-blue-500 via-40% to-orange-400 to-60%">Basic Info</h1>
      <p className="text-red-600 text-sm mb-2 tracking-wide text-center">Contact Number won&apos;t be shared publicly!</p>
      <hr className="border-gray-700 w-full mb-12" />


      <div className="flex flex-col md:flex-row">
        <label htmlFor="fullName" className="text-white text-left ml-5 flex items-center md:pl-8 w-60" >
          Full Name: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>

        <input type="text" id="fullName" name="fullName" required
          placeholder="Enter your full name here"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>

      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="email"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60"
        >
          Email ID: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input type="email" id="email" name="email" required
          placeholder="Enter your email address"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          value={email}
          onChange={({ target }) => setEmail(target?.value)}
        />
      </div>

      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="create_Pass"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60"
        >
          Create Password: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input type="text" id="createPass" name="createPass" required
          minLength="8" maxLength="24"
          placeholder="Create a strong password"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>

      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="confirm_pass"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60"
        >
          Confirm Password: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input type="password" id="confirmPass" name="confirmPass" required
          minLength="8" maxLength="24"
          placeholder="Confirm your password"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>
      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="phone"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60" >
          Contact Number: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Enter your phone number (WhatsApp preferable)"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          value={phone}
          onChange={({ target }) => setPhone(target?.value)}
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row">
        <label
          htmlFor="batchStartYear"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60" >
          Year of Admission (UG): <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input
          type="tel"
          id="admissionYear"
          name="admissionYear"
          required
          placeholder="Enter the starting year of your batch"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row">
        <label
          htmlFor="batchPassYear"
          className="text-white text-left ml-5 flex items-center md:pl-8 w-60" >
          Year of Passing (UG): <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input
          type="tel"
          id="passingYear"
          name="passingYear"
          required
          placeholder="Enter the starting year of your batch"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>

      <div className="mt-3 w-full flex flex-col md:flex-row justify-start">
        <label
          htmlFor="current_city"
          className="text-white text-left flex ml-5 items-center md:pl-8 w-60"
        >
          Current City: <FaAsterisk color="red" size={8} className="ml-1" />
        </label>
        <input
          type="text"
          id="currentCity"
          name="currentCity"
          required
          placeholder="Enter your current city"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
        />
      </div>

      <div className="mt-5 flex flex-row text-white">
        <p className="text-left mx-5 flex items-center md:pl-8 ">
          Sex: <FaAsterisk color="red" size={8} className="ml-1" />
        </p>
        <label htmlFor="male" className="mr-2">
          <input type="radio" id="male" name="sex" value="Male" />
          &ensp;Male&ensp;&ensp;&ensp;
        </label>
        <label htmlFor="female" className="mr-2">
          <input type="radio" id="female" name="sex" value="Female" />
          &ensp;Female&ensp;&ensp;&ensp;
        </label>
        <label htmlFor="others">
          <input type="radio" id="others" name="sex" value="Others" />
          &ensp;Others&ensp;&ensp;&ensp;
        </label>
      </div>


    </div>
  )
}

export default BasicInfoAlumniForm
