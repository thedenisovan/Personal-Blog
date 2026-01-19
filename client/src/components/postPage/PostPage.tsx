import { Link } from 'react-router';
import useFetchPosts from '../fetchPosts';
export default function PostPage() {
  const url = window.location.href.split('/');
  const postId = url[url.length - 1];

  const { post, loading } = useFetchPosts(
    `http://localhost:5000/post/${postId}`,
    false,
  );

  return (
    <main className='flex-1'>
      <div className='max-w-3xl mx-auto! px-6 py-12 relative'>
        <Link to='/' className='group dark:text-gray-300 text-gray-800'>
          <span className='group-hover:text-white text-3xl transition-all duration-100'>
            &larr;
          </span>
          <span className='group-hover:text-white text-lg transition-all duration-100'>
            Back
          </span>
        </Link>
      </div>
      {loading ? (
        <h1 className='text-white'>LOADING</h1>
      ) : (
        <h1 className='text-white'>{post!.title}</h1>
      )}
    </main>
  );
}
