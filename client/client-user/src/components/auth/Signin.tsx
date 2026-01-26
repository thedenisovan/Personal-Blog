import { useState, type FormEvent } from 'react';
import { Link, Navigate, useOutletContext } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import type { UserToken } from '../../types/react';

export default function Signin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  const { isSignedIn, toggleSignIn, setUser } = useOutletContext<{
    isSignedIn: boolean;
    toggleSignIn: (flag: boolean) => void;
    setUser: (val: UserToken | null) => void;
  }>();

  // Extracts token or error message after user attempts to sign in
  async function signInUser(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      // result.result obj contains error so if it exists
      // that's mean that error happened
      if (typeof result.result !== 'undefined') {
        setErrorMsg(result.result.errors[0].msg);

        // result.token is expected return obj containing token
      } else if (typeof result.token !== 'undefined') {
        localStorage.setItem('token', result.token);
        setErrorMsg(['']);
        toggleSignIn(true);

        const decoded = jwtDecode(result.token);
        const user = JSON.stringify(decoded);

        if (decoded) {
          setUser(decoded as UserToken);
        }
        localStorage.setItem('user', user);
      } else {
        throw new Error(
          `Unexpected object return inside Signin.tsx file lines  44-62.`,
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Response status: ${error.message}.`);
      } else {
        throw new Error(`Un known error took place.`);
      }
    }
  }

  if (isSignedIn) {
    return <Navigate to='/' />;
  } else {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 transition-colors duration-300'>
        <main className='w-full max-w-lg '>
          <Link className='flex justify-end mb-4!' to='/'>
            <p className='p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors text-gray-600 dark:text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='34'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-x w-5 h-5'
                aria-hidden='true'
              >
                <path d='M18 6 6 18'></path>
                <path d='m6 6 12 12'></path>
              </svg>
            </p>
          </Link>
          <div className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border h-110 border-gray-200 dark:border-slate-700'>
            <h4 className='text-3xl font-medium text-gray-900 dark:text-white mb-6!'>
              Sign In
            </h4>
            <form
              action='http://localhost:5000/signin'
              method='POST'
              className='space-y-6!'
              onSubmit={(e) => signInUser(e)}
            >
              <div>
                <label
                  className='block text-md font-medium text-gray-700 dark:text-gray-300 mb-2!'
                  htmlFor='username'
                >
                  Username
                </label>
                <div className='relative'>
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
                    className='lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  >
                    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                  <input
                    className='w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border-gray-300 border dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus-border-transparent outline-none text-gray-900 dark:text-white'
                    required
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter your username'
                  />
                </div>
              </div>
              <div>
                <label
                  className='block text-md font-medium text-gray-700 dark:text-gray-300 mb-2!'
                  htmlFor='password'
                >
                  Password
                </label>
                <div className='relative'>
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
                    className='lucide lucide-lock absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  >
                    <rect
                      width='18'
                      height='11'
                      x='3'
                      y='11'
                      rx='2'
                      ry='2'
                    ></rect>
                    <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
                  </svg>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full pl-10 pr-4 py-2 bg-white border dark:bg-slate-900 border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-gray-900 dark:focus:ring-slate-500 focus-border-transparent outline-none text-gray-900 dark:text-white'
                    type='password'
                    value={password}
                    id='password'
                    required
                    pattern='^(?=.*[A-Z])(?=.*\d).{6,}'
                    title='Password must be 6+ chars, including at least one uppercase letter and number.'
                    placeholder='Enter your password'
                  />
                </div>
              </div>
              <button
                type='submit'
                className='cursor-pointer w-full bg-gray-900 dark:bg-slate-700 text-white py-2 font-medium rounded-md hover:bg-gray-700 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2'
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
                  className='lucide lucide-log-in w-4 h-4'
                  aria-hidden='true'
                >
                  <path d='m10 17 5-5-5-5'></path>
                  <path d='M15 12H3'></path>
                  <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'></path>
                </svg>
                Sign-in
              </button>
              <p className='flex justify-center my-4! text-gray-900 dark:text-white'>
                {errorMsg}
              </p>
            </form>
            <div className='mt-6 text-center'>
              <button className='text-sm text-gray-600 dark:text-gray-400'>
                Don't have an account?{' '}
                <Link
                  className='hover:text-gray-900 dark:hover:text-white'
                  to='/signup'
                >
                  {' '}
                  Sign up{' '}
                </Link>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
