import { Link } from 'react-router';

export default function Header({
  signOutUser,
  isAdmin,
}: {
  signOutUser: () => void;
  isAdmin: boolean;
}) {
  return (
    <header className='bg-slate-800 h-20 py-5 flex md:block'>
      <div className='flex items-center max-w-6xl justify-between! px-4 xl:px-0 gap-1 mx-auto!'>
        <div className='flex items-center gap-6 lg:px-0'>
          <Link
            className='md:text-lg flex items-center gap-3 text-gray-200 border-gray-200 border rounded-lg md:py-1 px-1 md:px-5 hover:bg-slate-700 transition-colors duration-100'
            to={'https://personal-blog-3bi.pages.dev/'}
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
              className='lucide lucide-arrow-left w-5 h-5'
              aria-hidden='true'
            >
              <path d='m12 19-7-7 7-7'></path>
              <path d='M19 12H5'></path>
            </svg>
            Back to Reader
          </Link>
          <h1 className='font-bold md:text-2xl text-white'>Admin Dashboard</h1>
        </div>
        {isAdmin && (
          <Link
            onClick={() => signOutUser()}
            to='/signin'
            className='text-white cursor-pointer hover:text-gray-300'
          >
            Sign out
          </Link>
        )}
      </div>
    </header>
  );
}
