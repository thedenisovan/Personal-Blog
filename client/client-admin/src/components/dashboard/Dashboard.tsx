import Hero from './Hero';
import { Navigate } from 'react-router';
import { useOutletContext } from 'react-router';
import ErrorElement from '../../../../client-user/src/components/ErrorComponent';
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
    <div className='bg-slate-700 min-h-screen'>
      {loading ? (
        <div className='h-full'>
          <h2 className='text-white'>LOADING</h2>
        </div>
      ) : (
        <>
          <Hero allPosts={allPosts} posts={posts} />
          <AllPosts
            updatePosts={updatePosts}
            allPosts={allPosts}
            posts={posts}
          />
        </>
      )}
    </div>
  );
}
