import { Link } from 'react-router';

export default function ArticleContent({
  post,
  isSignedIn,
}: {
  post: Post | undefined;
  isSignedIn: boolean;
}) {
  return (
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
  );
}
