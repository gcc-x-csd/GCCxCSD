import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '@/util';

const PostCard = ({ post }) => (
  <div className="bg-black shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

    <div className="relative overflow-hidden shadow-md pb-60 mb-6">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-100 w-full object-cover  shadow-lg" />
    </div>

    <h1 className="transition duration-500 text-center mb-3 cursor-pointer text-pink-300 hover:text-pink-600 text-2xl lg:text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="48"
          width="48"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-400 ml-2 text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM - DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-justify text-md text-gray-500 font-normal px-4 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer hover:bg-purple-600">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;