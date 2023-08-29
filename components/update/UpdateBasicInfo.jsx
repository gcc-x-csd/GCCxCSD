import React from 'react'

const UpdateBasicInfo = ({ user }) => {
  return (
    <div className='w-full'>
      <h1 className="mt-20 font-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-green-600 from-10% via-blue-500 via-40% to-orange-400 to-60%">Update Basic Info</h1>
      <p className="text-red-600 text-sm mb-2 tracking-wide ">Contact Number won&apos;t be shared publicly!</p>
      <hr className="border-gray-700 w-full mb-12" />


      <div className="flex flex-col md:flex-row">
        <label htmlFor="fullName" className="text-transparent text-left  flex items-center w-8" >
          _id:  
        </label>

        <input type="text" name="userID" required
          placeholder="Enter your full name here"
          className="cursor-not-allowed text-transparent my-2 bg-transparent active:ring-0 focus:ring-0 rounded-md border-none ring-0 bg-gray-800 md:w-[60%]"
          defaultValue={user._id} value={user._id}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <label htmlFor="fullName" className="text-white text-left  flex items-center   w-60" >
          Full Name:  
        </label>

        <input type="text" id="fullName" name="fullName" required
          placeholder="Enter your full name here"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.name}
        />
      </div>

      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="email"
          className="text-white text-left   flex items-center   w-60"
        >
          Email ID:  
        </label>
        <input type="email" id="email" name="email" required
          placeholder="Enter your email address"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.email}
        />
      </div>

      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="create_Pass"
          className="text-white text-left   flex items-center   w-60"
        >
          Update Password:  
        </label>
        <input type="text" id="createPass" name="update_pass" required
          minLength="8" maxLength="24"
          placeholder="Create a strong password"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.password}
        />
      </div>

      
      <div className="mt-3 flex flex-col md:flex-row">
        <label
          htmlFor="phone"
          className="text-white text-left   flex items-center   w-60" >
          Contact Number:  
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Enter your phone number (WhatsApp preferable)"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.mobile_no}
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row">
        <label
          htmlFor="batchStartYear"
          className="text-white text-left   flex items-center   w-60" >
          Year of Admission (UG):  
        </label>
        <input
          type="tel"
          id="admissionYear"
          name="admissionYear"
          required
          placeholder="Enter the starting year of your batch"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.admission_year}
        />
      </div>

      <div className="mt-5 flex flex-col md:flex-row">
        <label
          htmlFor="batchPassYear"
          className="text-white text-left   flex items-center   w-60" >
          Year of Passing (UG):  
        </label>
        <input
          type="tel"
          id="passingYear"
          name="passingYear"
          required
          placeholder="Enter the starting year of your batch"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.passing_year}          
        />
      </div>

      <div className="mt-3 w-full flex flex-col md:flex-row justify-start">
        <label
          htmlFor="current_city"
          className="text-white text-left flex   items-center   w-60"
        >
          Current City:  
        </label>
        <input
          type="text"
          id="currentCity"
          name="currentCity"
          required
          placeholder="Enter your current city"
          className="p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]"
          defaultValue={user.current_city}
        />
      </div>
      {user.sex == 'Male' && (
        <div className="mt-5 flex flex-row text-white">
        <p className="text-left mr-5 flex items-center   ">
          Sex:  
        </p>
        <label htmlFor="male" className="mr-2">
          <input type="radio" id="male" name="sex" value="Male" defaultChecked />
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
      )}

      {user.sex == 'Female' && (
        <div className="mt-5 flex flex-row text-white">
        <p className="text-left mx-5 flex items-center   ">
          Sex:  
        </p>
        <label htmlFor="male" className="mr-2">
          <input type="radio" id="male" name="sex" value="Male" />
          &ensp;Male&ensp;&ensp;&ensp;
        </label>
        <label htmlFor="female" className="mr-2">
          <input type="radio" id="female" name="sex" value="Female" defaultChecked />
          &ensp;Female&ensp;&ensp;&ensp;
        </label>
        <label htmlFor="others">
          <input type="radio" id="others" name="sex" value="Others" />
          &ensp;Others&ensp;&ensp;&ensp;
        </label>
      </div>
      )}

      {
        user.sex == 'Others' && (
            <div className="mt-5 flex flex-row text-white">
        <p className="text-left mx-5 flex items-center   ">
          Sex:  
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
          <input type="radio" id="others" name="sex" value="Others" defaultChecked />
          &ensp;Others&ensp;&ensp;&ensp;
        </label>
      </div>

        )
      }

    </div>
  )
}

export default UpdateBasicInfo
