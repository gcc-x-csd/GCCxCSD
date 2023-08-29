import React from 'react'
import Image from 'next/image'
import { FaAsterisk } from 'react-icons/fa'

const DocProofAlumniForm = () => {

    const Preview =  () => {
        const [file] = proofDocument.files
        if (file) {
          preview.src = URL.createObjectURL(file)
        }
      }

  return (
    <div>
         <div className="flex flex-col mb-3">
          <label htmlFor="proofDocument"
          className="text-white text-center flex md:mr-8 mx-5 my-5 items-center md:pl-8" >
            Proof of Document <br />
             (Provide proof like ID Card, Fee Card, Admit Card,
            Marksheet, etc. in pdf or jpeg format so that we can verify you as
            an alumni / student):
            <FaAsterisk color="red" size={8} className="ml-1" />
          </label>
          <div className="relative border-dashed border-2 border-purple-800 bg-gray-900 rounded-md w-[80%] h-[300px] flex mx-auto justify-center items-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center">
              <div className="mb-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className="mx-auto h-12 w-12 text-gray-400">
                    <path fillRule="evenodd" d="M2 5a1 1 0 011-1h4.586a1 1 0 01.707.293l.707.707a1 1 0 01.293.707V9.5h6.5a1 1 0 010 2H9.5v3.793a1 1 0 01-.293.707l-.707.707a1 1 0 01-.707.293H3a1 1 0 01-1-1V5zm8.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-400 font-semibold mb-8">Select file to upload!</p>
                <div className="flex flex-col justify-center align-middle w-full">

                <div className="w-[200px] h-[120px] overflow-clip self-center">
                <Image id="preview" src="" alt="PREVIEW" unoptimized
                  width={200}
                  height={100} className="self-center text-gray-500 border-2 mb-4 text-2xl font-bold border-gray-500 border-dashed" />
                </div>

                <input type="file" id="proofDocument" name="proofDocument" 
                accept="image/*, .pdf" onChange={Preview}
                className="text-white self-center border-[1px] rounded-md" />

              </div>
              </div>
             
              

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default DocProofAlumniForm
