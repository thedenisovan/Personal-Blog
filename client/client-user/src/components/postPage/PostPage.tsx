import { Link } from 'react-router';
import useFetchPosts from '../fetchPosts';
import svgObject from '../../utils/svgObject';
import { useOutletContext } from 'react-router';
import ArticleContent from './ArticleContent';
import Comments from './Comments';

export default function PostPage() {
  const url = window.location.href.split('/');
  const postId = url[url.length - 1];

  const { post, loading } = useFetchPosts(
    `http://localhost:5000/post/${postId}`,
    false,
  );
  const { isSignedIn } = useOutletContext<{ isSignedIn: boolean }>();

  return (
    <main className='flex-1'>
      <div className='max-w-3xl mx-auto! px-6 py-12 relative'>
        <Link to='/' className='group dark:text-gray-300 text-gray-800 '>
          <div className='mb-12!'>
            <span className='group-hover:text-white text-3xl transition-all duration-100'>
              &larr;
            </span>
            <span className='group-hover:text-white text-lg transition-all duration-100'>
              Back
            </span>
          </div>
        </Link>

        {loading ? (
          <div className='flex justify-center items-center mt-10! md:mt-40!'>
            <img
              className='animate-spin w-30 hidden! dark:inline!'
              src={svgObject.loadingLight}
              alt='loading svg'
              aria-hidden='true'
            />
            <img
              className='animate-spin w-30 inline! dark:hidden!'
              src={svgObject.loadingDark}
              alt='loading svg'
              aria-hidden='true'
            />
          </div>
        ) : (
          <>
            <ArticleContent post={post} isSignedIn={isSignedIn} />
            <Comments isSignedIn={isSignedIn} post={post} postId={postId} />
          </>
        )}
      </div>
    </main>
  );
}
