import { Link } from 'react-router';
import useFetchPosts from '../fetchPosts';
import svgObject from '../../utils/svgObject';
import { useOutletContext } from 'react-router';

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
            {/* ARTICLE SECTION OF DOCUMENT */}
            <article className='mb-12!'>
              <div className='mb-4!'>
                <span className='inline-bloc px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded'>
                  {post?.categoryName.name}
                </span>
              </div>
              <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-6! leading-tight'>
                {post?.title}
              </h2>
              <div className='flex items-center gap-6 mb-8! text-sm text-gray-600 dark:text-gray-400'>
                <div className='flex items-center gap-2'>
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
                    className='lucide lucide-user w-4 h-4'
                    aria-hidden='true'
                  >
                    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                  <span>Dainis Dilevka</span>
                </div>
                <div className='flex items-center gap-2'>
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
                    className='lucide lucide-calendar w-4 h-4'
                    aria-hidden='true'
                  >
                    <path d='M8 2v4'></path>
                    <path d='M16 2v4'></path>
                    <rect width='18' height='18' x='3' y='4' rx='2'></rect>
                    <path d='M3 10h18'></path>
                  </svg>
                  <span>{post?.dateString}</span>
                </div>
              </div>
              <div className='mb-8!'>
                <div className='flex items-center gap-3'>
                  <button
                    disabled={!isSignedIn}
                    className={`${!isSignedIn ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 text-gray-400 dark:text-gray-500 text-sm font-medium`}
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
                      className='lucide lucide-heart w-4 h-4'
                      aria-hidden='true'
                    >
                      <path d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5'></path>
                    </svg>
                    <span>{post?.likedBy.length}</span>
                  </button>
                  <div className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
                    <span>Want to like this post!</span>
                    <Link
                      className='text-indigo-600 dark:text-indigo-400 font-medium hover:underline'
                      to='/signin'
                    >
                      {' '}
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
              <div className='prose dark:prose-invert max-w-none'>
                <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg xl:text-xl'>
                  {post?.content}
                </p>
              </div>
            </article>

            <div className='border-t border-gray-200 dark:border-slate-700 pt-12'>
              <div className='flex items-center gap-3 mb-8!'>
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
                  className='lucide lucide-message-circle w-5 h-5 text-gray-900 dark:text-white'
                  aria-hidden='true'
                >
                  <path d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'></path>
                </svg>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  Comments (<span>{post?.comments.length}</span>)
                </h3>
              </div>

              {/* COMMENTS SECTION OF DOCUMENT */}
              {post?.comments.length && (
                <div className='space-y-6! mb-12!'>
                  {post?.comments.map((comment) => (
                    <div className='bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6!'>
                      <div className='flex items-start gap-4'>
                        <div className='w-10 h-10 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold shrink-0'>
                          {comment.authorName[0].toUpperCase()}
                        </div>
                        <div className='flex-1'>
                          <div className='flex items-center gap-3 mb-2!'>
                            <span className='font-semibold text-gray-900 dark:text-white'>
                              {comment.authorName}
                            </span>
                            <span className='text-sm text-gray-500 dark:text-gray-400'>
                              {comment.createdAt.split('T')[0]}
                            </span>
                          </div>
                          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* NEW COMMENTS FORM  */}
              <div className='bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6'>
                <h4 className='text-lg font-bold text-gray-900 dark:text-white mb-4!'>
                  Leave a comment
                </h4>
                <form
                  action={`http://localhost:5000/post/${postId}`}
                  method='post'
                  className='space-y-4'
                >
                  <div className='mb-6!'>
                    <label
                      htmlFor='author'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='author'
                      name='authorName'
                      className='w-full px-4 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus:border-transparent outline-none text-gray-900 dark:text-white'
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='content'
                      className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!'
                    >
                      Comment
                    </label>
                    <textarea
                      id='content'
                      name='content'
                      rows={4}
                      className='w-full px-4 py-2 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus:border-transparent outline-none resize-none text-gray-900 dark:text-white'
                      placeholder='Write your comment...'
                      required
                    ></textarea>

                    <button
                      type='submit'
                      className='flex mt-6! items-center gap-2 px-6 py-2 bg-gray-900 dark:bg-slate-700 text-white rounded-md font-medium hover:bg-gray-700 dark:hover:bg-slate-600 transition-colors'
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
                        className='lucide lucide-send w-4 h-4'
                        aria-hidden='true'
                      >
                        <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'></path>
                        <path d='m21.854 2.147-10.94 10.939'></path>
                      </svg>
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
