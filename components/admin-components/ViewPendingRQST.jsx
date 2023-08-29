import React from 'react'
import axios from "axios";
import { GiCheckMark } from "react-icons/gi";
import { ImBin } from "react-icons/im";



const ViewPendingRQST = ({ pending_RQST_DBName }) => {
  
  const deleteUsers = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    // Sends data over a server
    try {
      const { data } = await axios({
        url: "/api/deleteusers",
        method: "POST",
        data: form_values,
      });
    } catch (error) {
      console.log("Error!");
    }
  };

  const approveUser = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    // Sends data over a server
    try {
      const { data } = await axios({
        url: "/api/addVerifiedAlumni",
        method: "POST",
        data: form_values,
      });
    } catch (error) {
      console.log("Error!");
    }
  };

  return (
    <div className="px-8 w-[100%] self-end">

      {pending_RQST_DBName.map((user) => (
        <form
          key={user._id}
          className="bg-gray-950 text-gray-300 border-2 rounded-lg my-20 p-4"
          action="/api/addVerifiedAlumni" 
        >
         
          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="fullName" className="w-72 font-semibold">
              Name:{" "}
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={user.name}
              defaultValue={user.name}
              contentEditable="false"
              readOnly
              className="bg-gray-950  text-gray-400 w-full border-none cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="email" className="w-72 font-semibold">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              required
              value={user.email}
              defaultValue={user.email}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="phone" className="w-72 font-semibold">
              Phone:{" "}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={user.mobile_no}
              defaultValue={user.mobile_no}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="sex" className="w-72 font-semibold">
              Sex:{" "}
            </label>
            <input
              type="text"
              name="sex"
              required
              value={user.sex}
              defaultValue={user.sex}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="password" className="w-72 font-semibold">
              Password:{" "}
            </label>
            <input
              type="text"
              name="password"
              required
              value={user.password}
              defaultValue={user.password}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="admissionYear" className="w-72 font-semibold">
              Year of Admission (UG):{" "}
            </label>
            <input
              type="tel"
              name="admissionYear"
              required
              value={user.admission_year}
              defaultValue={user.admission_year}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="passingYear" className="w-72 font-semibold">
              Year of Passing (UG):{" "}
            </label>
            <input
              type="tel"
              name="passingYear"
              required
              value={user.passing_year}
              defaultValue={user.passing_year}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="current_city" className="w-72 font-semibold">
              Current City:{" "}
            </label>
            <input
              type="text"
              name="currentCity"
              required
              value={user.current_city}
              defaultValue={user.current_city}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          {/* PG DETAILS if (YES) */}
          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="any_degree_after_ug" className="w-72 font-semibold">
              Any degree after UG ?{" "}
            </label>
            <input
              type="text"
              name="any_degree_after_ug"
              required
              value={user.any_degree_after_ug}
              defaultValue={user.any_degree_after_ug}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="pg_degree" className="w-72 font-semibold">
              PG Degree:{" "}
            </label>
            <input
              type="text"
              name="pg_degree"
              value={user.pg_degree}
              defaultValue={user.pg_degree}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="pg_specialization" className="w-72 font-semibold">
              Specialization:{" "}
            </label>
            <input
              type="text"
              name="pg_specialization"
              value={user.pg_specialization}
              defaultValue={user.pg_specialization}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="pg_admissionYear" className="w-72 font-semibold">
              Year of Admission (PG):{" "}
            </label>
            <input
              type="tel"
              name="pg_admissionYear"
              value={user.pg_admissionYear}
              defaultValue={user.pg_admissionYear}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="pg_passingYear" className="w-72 font-semibold">
              Year of Passing (PG):{" "}
            </label>
            <input
              type="tel"
              name="pg_passingYear"
              value={user.pg_passingYear}
              defaultValue={user.pg_passingYear}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          {/* CURRENT OCCUPATION */}
          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="current_occupation" className="w-72 font-semibold">
              Current Occupation:{" "}
            </label>
            <input
              type="text"
              name="current_occupation"
              required
              value={user.current_occupation}
              defaultValue={user.current_occupation}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="company_or_org" className="w-72 font-semibold">
              Company/Organization:{" "}
            </label>
            <input
              type="text"
              name="company_or_org"
              value={user.company_or_org}
              defaultValue={user.company_or_org}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="yrs_of_experience" className="w-72 font-semibold">
              Years of Experience:{" "}
            </label>
            <input
              type="tel"
              name="yrs_of_experience"
              value={user.yrs_of_experience}
              defaultValue={user.yrs_of_experience}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="workingInTechField" className="w-72 font-semibold">
              Working in tech-related field?{" "}
            </label>
            <input
              type="text"
              name="workingInTechField"
              value={user.workingInTechField}
              defaultValue={user.workingInTechField}
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          {/* ALUMNI SOCIAL MEDIAS */}
          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="facebook_url" className="w-72 font-semibold">
              Facebook:{" "}
            </label>
            <input
              type="text"
              name="facebook_url"
              value={user.facebook_url}
              defaultValue={user.facebook_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="instagram_url" className="w-72 font-semibold">
              Instagram:{" "}
            </label>
            <input
              type="text"
              name="instagram_url"
              value={user.instagram_url}
              defaultValue={user.instagram_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="twitter_url" className="w-72 font-semibold">
              Twitter:{" "}
            </label>
            <input
              type="text"
              name="twitter_url"
              value={user.twitter_url}
              defaultValue={user.twitter_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="linkedin_url" className="w-72 font-semibold">
              LinkedIn:{" "}
            </label>
            <input
              type="text"
              name="linkedin_url"
              value={user.linkedin_url}
              defaultValue={user.linkedin_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="github_url" className="w-72 font-semibold">
              GitHub:{" "}
            </label>
            <input
              type="text"
              name="github_url"
              value={user.github_url}
              defaultValue={user.github_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 w-full my-[1px] p-[1px]">
            <label htmlFor="portfolio_url" className="w-72 font-semibold">
              Portfolio:{" "}
            </label>
            <input
              type="text"
              name="portfolio_url"
              value={user.portfolio_url}
              defaultValue={user.portfolio_url}
              placeholder="null"
              contentEditable="false"
               
              className="bg-gray-950  text-gray-400 w-full cursor-not-allowed pl-4 focus:outline-none"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end w-full">
            <button
              className="w-40 h-10 text-lg pl-2 rounded-lg flex justify-center text-white bg-green-950 hover:border-2 hover:border-green-500 transition-shadow hover:shadow-md hover:shadow-green-900 duration-100"
              type="submit"
              formAction="/api/addVerifiedAlumni"
              formMethod="POST"
              onSubmit={approveUser}
            >
              <p className="self-center font-semibold">Approve</p>
              <GiCheckMark className="self-center ml-2 text-green-400" />
            </button>

            <button
              className="w-40 h-10 text-lg rounded-lg flex justify-center text-white bg-red-950 hover:border-2 hover:border-red-500 transition-shadow hover:shadow-md hover:shadow-red-900 duration-100"
              type="submit"
              formAction="/api/deleteusers"
              formMethod="POST"
              onSubmit={deleteUsers}
            >
              <p className="self-center font-semibold">Delete</p>
              <ImBin className="self-center ml-2 text-red-500" />
            </button>
          </div>
        </form>
      ))}

    </div>
  );
};


export default ViewPendingRQST;
