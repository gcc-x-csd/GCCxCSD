import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { FaAsterisk } from "react-icons/fa";

import { 
  BasicInfoAlumniForm,
  OccupationAlumniForm, 
  PGAlumniForm, 
  SocialMediaAlumniForm, 
  DocProofAlumniForm } from "@/components";


const register = () => {


  
const handleSubmit = async (e) => {
  e.preventDefault();
  var formData = new FormData(e.target);
  const form_values = Object.fromEntries(formData);

      // Sends data over a server
        try {
          const { data } = await axios({
            url: "/api/addusers",
            method: "POST",
            data: form_values
            })

        } catch (error) {
            console.log("Error!");
        }     
}



  return (
    <div className="bg-gradient-to-br from-black via-indigo-950 to-sky-950 h-full pt-12 flex flex-col">
      <form action="/api/addusers" method="POST" 
        className="bg-gray-950 px-2 h-auto w-[90%] md:w-[70%] my-4 rounded-md flex flex-col justify-center items-center self-center">
        <Image src="/user-student.png" unoptimized
          alt="alumni-form"
          width={100}
          height={100}
        />

        <h1 className="pb-4 text-center font-extrabold text-transparent text-2xl sm:text-4xl bg-clip-text bg-gradient-to-r from-cyan-400 from-20% via-indigo-800 via-40% to-emerald-500 to-90%">
          Register as Alumni / Student
        </h1>

        <p className="text-red-600 tracking-wide text-sm">
          Only Students / Alumni of the Department of Computer Science of GC
          College, Silchar can register!
        </p>
        {/* <hr className="border-gray-700 w-full my-8" /> */}

        <div className="flex w-[90%] flex-col justify-center mb-3">
       
          <BasicInfoAlumniForm />
          <PGAlumniForm />
          <OccupationAlumniForm />
          <SocialMediaAlumniForm />

          <hr className="border-gray-700 w-full my-8" />
        </div>


        {/* <DocProofAlumniForm /> */}
        {/* <hr className="border-gray-700 w-full my-8" /> */}

       


        <div className="flex">
          <button type="submit" onSubmit={handleSubmit}
          className="bg-purple-900 text-lg text-white w-72 p-3 font-semibold my-12 rounded-md hover:bg-purple-950 transition-all" >
            Submit Form for Review!
          </button>
        </div>
      </form>
    </div>
  );
};

export default register;
