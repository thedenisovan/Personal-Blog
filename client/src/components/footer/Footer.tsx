import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === '/signin' || pathname === '/signup') return null;

  return (
    <footer className='mt-12! border-t! pl-6 flex md:justify-center dark:bg-slate-800 dark:border-slate-700 bg-white border-gray-200 py-6'>
      <div className='max-w-6xl grid md:grid-cols-3 gap-6 pb-6! pt-6'>
        <div className='flex flex-col gap-1'>
          <h6 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm'>
            Dainis Dilevka
          </h6>
          <p className='text-xs text-gray-600 dark:text-gray-400 leading-relaxed'>
            A modern blog for sharing knowledge and insights.
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <h6 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm'>
            Quick Links
          </h6>
          <ul className=' flex flex-col gap-3'>
            <a
              href='#'
              className='text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#'
              className='text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              Terms of Service
            </a>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h6 className='font-semibold text-gray-900 dark:text-white mb-2 text-sm'>
            Connect
          </h6>
          <div className='flex gap-2'>
            <a
              href='https://github.com/thedenisovan?tab=overview&from=2025-08-01&to=2025-08-12'
              className='w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-700 dark:text-gray-300'
              aria-label='GitHub'
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
                className='lucide lucide-github w-4 h-4'
                aria-hidden='true'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
            </a>
            <a
              href='#'
              className='w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-700 dark:text-gray-300'
              aria-label='Twitter'
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
                className='lucide lucide-twitter w-4 h-4'
                aria-hidden='true'
              >
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/dainis-dilevka-961a332b4/'
              className='w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-gray-700 dark:text-gray-300'
              aria-label='LinkedIn'
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
                className='lucide lucide-linkedin w-4 h-4'
                aria-hidden='true'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect width='4' height='12' x='2' y='9'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
