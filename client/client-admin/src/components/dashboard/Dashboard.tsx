import Hero from './Hero';
import { Navigate, Link } from 'react-router';
import { useOutletContext } from 'react-router';
import ErrorElement from '../../ErrorComponent';
import AllPosts from './AllPosts';

export default function Dashboard() {
  const { isAdmin, loading, error, allPosts, posts, updatePosts } =
    useOutletContext<{
      isAdmin: boolean;
      loading: boolean;
      error: string;
      allPosts: Post[];
      posts: Post[];
      updatePosts: (posts: Post[]) => void;
    }>();

  if (!isAdmin) {
    return <Navigate to='signin' />;
  } else if (error) return <ErrorElement />;
  return (
    <div className='bg-slate-900  py-5 md:py-10 min-h-screen'>
      {loading ? (
        <div className='h-full text-center animate-bounce'>
          <h2 className='text-white text-4xl'>LOADING</h2>
        </div>
      ) : (
        <main className='max-w-6xl mx-auto!'>
          <Hero allPosts={allPosts} posts={posts} />
          <Link
            to='newPost'
            className='mb-6! bg-slate-700 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-600 transition-colors flex items-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-file-text w-5 h-5'
              aria-hidden='true'
            >
              <path d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'></path>
              <path d='M14 2v5a1 1 0 0 0 1 1h5'></path>
              <path d='M10 9H8'></path>
              <path d='M16 13H8'></path>
              <path d='M16 17H8'></path>
            </svg>
            Create New Blog
          </Link>
          <AllPosts
            updatePosts={updatePosts}
            allPosts={allPosts}
            posts={posts}
          />
        </main>
      )}
    </div>
  );
}
