import Hero from './Hero';
import { Navigate } from 'react-router';
import { useOutletContext } from 'react-router';
import ErrorElement from '../../../../client-user/src/components/ErrorComponent';

export default function Dashboard() {
  const { isAdmin, loading, error, allPosts } = useOutletContext<{
    isAdmin: boolean;
    loading: boolean;
    error: string;
    allPosts: Post[];
  }>();

  console.log(allPosts);

  if (!isAdmin) {
    return <Navigate to='signin' />;
  } else if (error) return <ErrorElement />;
  return (
    <div className='bg-slate-700 h-screen'>
      {loading ? (
        <h2 className='text-white'>LOADING</h2>
      ) : (
        <Hero allPosts={allPosts} />
      )}
    </div>
  );
}
