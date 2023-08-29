import React from 'react'

const UpdateSocialMediaURL = ({ user }) => {
  return (
    <div className='w-full flex flex-col items-center mt-12'>
            <h1 className='mt-20 self-start font-bold text-transparent text-2xl sm:text-3xl bg-clip-text bg-gradient-to-r from-fuchsia-600 from-20% via-indigo-500 via-40% to-orange-400 to-90%'>Update Social Media Handles</h1>

            <p className="text-red-600 mb-2 text-sm tracking-wide self-start">Provide at least two social media links!</p>
            <hr className="border-gray-700 w-full mb-8" />

            <div className="w-full mt-5 flex justify-start flex-col md:flex-row">
                <label htmlFor='alumni_fb' className='text-white text-left flex items-center w-28 mr-3'>
                    Facebook:
                </label>
                <input type='url' id='fb_url' name='fb_url' placeholder='Enter your Facebook Profile URL'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%] justify-end' 
                defaultValue={user.facebook_url} />
            </div>


            <div className="w-full mt-3 flex justify-start flex-col md:flex-row">
                <label htmlFor='alumni_insta' className='text-white text-left flex items-center w-28 mr-3'>
                    Instagram:
                </label>
                <input type='url' id='insta_url' name='insta_url' placeholder='Enter your Instagram Profile URL'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                defaultValue={user.instagram_url} />
            </div>


            <div className='w-full mt-3 flex justify-start flex-col md:flex-row'>
                <label htmlFor='alumni_linkedin' className='text-white text-left flex items-center w-28 mr-3'>
                    LinkedIn:
                </label>
                <input type='url' id='linkedIn_url' name='linkedIn_url' placeholder='Enter your LinkedIn Profile URL'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                defaultValue={user.linkedin_url} />
            </div>


            <div className='w-full mt-3 flex justify-start flex-col md:flex-row'>
                <label htmlFor='alumni_twitter' className='text-white text-left flex items-center w-28 mr-3'>
                    Twitter:
                </label>
                <input type='url' id='twitter_url' name='twitter_url' placeholder='Enter your Twitter Profile URL'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                defaultValue={user.twitter_url} />
            </div>
            

            <div className='w-full mt-3 flex justify-start flex-col md:flex-row'>
                <label htmlFor='alumni_github' className='text-white text-left flex items-center w-28 mr-3'>
                    GitHub:
                </label>
                <input type='url' id='github_url' name='github_url' placeholder='Enter your GitHub Profile URL'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                defaultValue={user.github_url} />
            </div>
            

            <div className='w-full mt-3 flex justify-start flex-col md:flex-row'>
                <label htmlFor='alumni_portfolio' className='text-white text-left flex items-center w-28 mr-3'>
                   Portfolio:
                </label>
                <input type='url' id='portfolio_url' name='portfolio_url' placeholder='Enter your Website / Portfolio link'
                className='p-2 my-2 rounded-md bg-gray-800 text-white md:w-[60%]'
                defaultValue={user.portfolio_url} />
            </div>
        </div>
  )
}

export default UpdateSocialMediaURL
