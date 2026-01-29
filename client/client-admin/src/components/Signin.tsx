import { useState, type FormEvent } from 'react';
import { Navigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import type { UserToken } from '../../../client-user/src/types/react';
import { useOutletContext } from 'react-router';

export default function Signin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string[]>([]);
  const { isAdmin, setIsAdmin } = useOutletContext<{
    isAdmin: boolean;
    setIsAdmin: (val: boolean) => void;
  }>();

  // Extracts token or error message after user attempts to sign in
  async function signInUser(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://dainis-dilevka.up.railway.app/signin',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        },
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      // result.result obj contains error so if it exists
      // that's mean that error happened
      if (typeof result.result !== 'undefined') {
        setErrorMsg(result.result.errors[0].msg);
        setPassword('');
        setUsername('');

        // result.token is expected return obj containing token
      } else if (typeof result.token !== 'undefined') {
        setErrorMsg(['']);

        const decoded = jwtDecode(result.token);
        const user = JSON.stringify(decoded);

        if (decoded) {
          if ((decoded as UserToken).role === 'ADMIN') {
            // setUser(decoded as UserToken);
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', user);
            setIsAdmin(true);
          } else {
            localStorage.removeItem('user');
            setIsAdmin(false);
            setErrorMsg(['Only admins have access to this website.']);
          }
        }
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

  if (isAdmin) {
    return <Navigate to='/' />;
  } else {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-900 px-4 transition-colors duration-300'>
        <main className='w-full max-w-lg '>
          <div className='bg-slate-800 rounded-xl p-8 shadow-lg border h-110 border-slate-700'>
            <h4 className='text-3xl font-medium text-white mb-6!'>Sign In</h4>
            <form
              action='https://dainis-dilevka.up.railway.app/signin'
              method='POST'
              className='space-y-6!'
              onSubmit={(e) => signInUser(e)}
            >
              <div>
                <label
                  className='block text-md font-medium text-gray-300 mb-2!'
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
                    className='w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-600 rounded-md focus:ring-2  focus:ring-slate-500 focus-border-transparent outline-none text-white!'
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
                  className='block text-md font-medium text-gray-300 mb-2!'
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
                    className='w-full pl-10 pr-4 py-2 border bg-slate-900 border-slate-600 rounded-md focus:ring-2 focus:ring-slate-500 focus-border-transparent outline-none text-white'
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
                className='cursor-pointer w-full bg-slate-700 text-white py-2 font-medium rounded-md hover:bg-slate-600 transition-colors flex items-center justify-center gap-2'
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
              <p className='flex justify-center my-4! text-white'>{errorMsg}</p>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
