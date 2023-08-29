import { FeaturedPosts } from '@/sections';
// eslint-disable-next-line import/named
import { PostCard, Categories, PostWidget, SubHeader } from '@/components';
import { getPosts } from '@/services';

export default function eventblog({ posts }) {
  return (
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950'>
    <SubHeader gradientText='CSx' text='Blog.' 
      metaDescription='Official blogging page of the Department of Computer Science - Gurucharan College, Silchar' />
    <div className="mx-auto px-10 ">
    
      <h1 className='text-center text-lg sm:text-3xl text-white font-semibold mt-4'>Featured Posts</h1>
      <hr className='mx-64 mt-2 mb-8 border-cyan-600' />
      <FeaturedPosts />
      <div className='h-20'></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Categories widget with 3 columns out of 12 */}
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-0 sm:top-28">
            <Categories />
          </div>
        </div>

        {/* Post Card with 6 columns out of 12 */}
        <div className="lg:col-span-6 col-span-1 top-28">
          {posts.reverse().map((post, index) => (
            <PostCard key={index} post={post.node} />))}
        </div>

        {/* Post Widget (Previous Post/Related post) with 3 columns out of 12 */}
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-28">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}