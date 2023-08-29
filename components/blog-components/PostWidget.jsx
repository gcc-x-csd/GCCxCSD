import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '@/util';
import { getSimilarPosts, getRecentPosts } from '@/services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-black shadow-lg rounded-lg py-8 px-6 pb-12 mb-8">
      <h3 className="text-white text-xl text-center font-semibold shadow-lg border-b border-gray-500 rounded-md pb-4 mb-8">{slug ? 'Related Posts' : 'Previous Posts'}</h3>
      {relatedPosts.map((post, index) => (
        
        <div key={index} className="flex items-top w-full my-6">
         
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full w-[60px] h-[60px] "
              src={post.featuredImage.url}
            />
       
          <div className="flex-grow align-top ml-4">
            <div className="text-md text-white hover:text-purple-400 hover:underline hover:duration-200">
              <Link href={`/post/${post.slug}`} key={index}>
                {post.title}
              </Link>
            </div>
            <p className="text-gray-400 text-sm">{moment(post.createdAt).format('MMM - DD, YYYY')}</p>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default PostWidget;