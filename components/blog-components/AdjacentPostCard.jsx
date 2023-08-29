import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi'

const AdjacentPostCard = ({ post, position }) => (
  <div>
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" 
    style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    
  <div className="absolute rounded-lg bg-center bg-gradient-to-l  from-fuchsia-950/70 via-purple-900/70 to-black/80 w-full h-72" />
    
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-gray-300 text-shadow text-md">{moment(post.createdAt).format('MMM - DD, YYYY')}</p>
      <p className="text-white text-shadow font-semibold text-3xl text-center">{post.title}</p>
    </div>

    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    
        {position === 'LEFT' && (
          <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer left-4 rounded-full">
           <BiChevronLeftCircle color='cyan' size={48} />
          </div>
        )}
        {position === 'RIGHT' && (
          <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer  right-4 rounded-full">
            <BiChevronRightCircle color='cyan' size={48} />
          </div>
        )}
  </div>
);

export default AdjacentPostCard;
