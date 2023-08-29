import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Author, Loader } from '@/components';
import { getPosts, getPostDetails } from '@/services';
import { AdjacentPosts } from '@/sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-6 pb-8 bg-gradient-to-br from-black via-indigo-950 to-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 pt-24">
        
        <div className="col-span-1 lg:col-span-3">
            <div className="relative lg:sticky top-28">
              <Categories />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="relative lg:sticky top-28">
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />         
            </div>
          </div>


          
          
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
