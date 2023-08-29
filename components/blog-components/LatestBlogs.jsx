import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { FcCalendar } from 'react-icons/fc'


import { grpahCMSImageLoader } from '@/util';
import { getSimilarPosts, getLastestPosts } from '@/services';




const LatestBlogs = ({ categories, slug }) => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setLatestPosts(result);
      });
    } else {
        getLastestPosts().then((result) => {
        setLatestPosts(result);
      });
    }
  }, [slug]);




return (
  <div className="rounded-lg max-w-2xl">
      
      {latestPosts.map((post, index) =>
        <Link href={`/post/${post.slug}`} key={index}> 
          <div key={index} className="flex items-center sm:items-top w-full p-2 mb-4 bg-black/80 hover:bg-gray-900 hover:border-[1px] border-gray-500 hover:duration-200 rounded-lg shadow-lg ">

{/* Featured Image of the Post */}  
                <Image loader={grpahCMSImageLoader} unoptimized
                  alt={post.title}
                  height={20}
                  width={20}
                  className="align-middle self-center rounded-lg  w-[100px] sm:w-[120px] h-[120px]"
                  src={post.featuredImage.url}
                />
            
    
                <div className="flex-grow align-top ml-2 sm:ml-4 py-2 sm:py-4">
{/* Title of the Post */}
                    <div className="text-sm sm:text-md md:text-xl min-w-[160px] mb-1 text-white">{post.title}</div>


                    <div className='flex gap-1 sm:gap-6 my-2 flex-col sm:flex-row'>
{/* Date at which the post is created/posted! */}
                        <div className='flex gap-1'>
                            <FcCalendar size={28} className='w-5 h-5 self-center' />
                            <p className="text-gray-400 text-xs sm:text-sm md:text-md self-center">{moment(post.createdAt).format('MMM - DD, YYYY')}</p>
                        </div>

{/* Author Photo and Author Name */}
                        <div className='flex gap-1'>
                            <Image loader={grpahCMSImageLoader} unoptimized
                              src={post.author.photo.url}
                              alt={post.title}
                              height={20}
                              width={20}
                              className="align-middle rounded-full h-5 w-5 sm:h-7 sm:w-7"
                            />
                            <p className="text-gray-400 text-xs sm:text-sm md:text-md self-center ">{post.author.name}</p>
                        </div>

                </div>

              </div>
          </div>
        </Link>
      )}
  </div>
  );
};

export default LatestBlogs;