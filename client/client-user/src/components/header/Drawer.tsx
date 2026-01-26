import { Link } from 'react-router';
import svgObject from '../../utils/svgObject';
import type { UserToken } from '../../types/react';

export default function Drawer({
  toggleDrawer,
  toggleTheme,
  drawerState,
  isSignedIn,
  signoutUser,
  user,
}: {
  user: UserToken | null;
  signoutUser: () => void;
  isSignedIn: boolean;
  drawerState: boolean;
  toggleTheme: () => void;
  toggleDrawer: () => void;
}) {
  return (
    <aside
      className={`z-1 md:hidden fixed h-screen flex transition-transform duration-500 ease-out inset-0
          ${drawerState ? '-translate-x-full ' : ''}`}
    >
      <nav className='dark:text-white text-gray-800 dark:bg-slate-800 w-[80%] bg-white p-3 overflow-hidden'>
        <div className='flex gap-3 items-center pt-3 pb-6'>
          {/* LOGO COMPONENT */}
          <div
            className={` flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-2 text-white font-bold`}
          >
            DD
          </div>
          <h2 className='font-medium text-2xl'>Dainis Dilevka</h2>
        </div>
        <ul>
          <li className='flex items-center gap-3 py-2'>
            <img
              src={svgObject.latestWhite}
              className='dark:inline! hidden!'
              alt='articles icon'
              width={25}
            />
            <img
              src={svgObject.latestBlack}
              className='inline dark:hidden!'
              alt='articles icon'
              width={25}
            />
            <Link onClick={() => toggleDrawer()} to='/'>
              <p className='font-medium text-xl'>Articles</p>
            </Link>
          </li>
          <li className='flex items-center gap-3 py-2'>
            <img
              src={svgObject.aboutWhite}
              className='dark:inline! hidden!'
              alt='articles icon'
              width={25}
            />
            <img
              src={svgObject.aboutBlack}
              className='inline dark:hidden!'
              alt='articles icon'
              width={25}
            />
            <Link onClick={() => toggleDrawer()} to='/about'>
              <p className='font-medium text-xl'>About</p>
            </Link>
          </li>
          <hr className='w-100 -translate-x-10 my-5!' />

          {isSignedIn && user!.role === 'ADMIN' && (
            <li className='flex items-center gap-3 py-2'>
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
                className='lucide lucide-shield w-5 h-5'
                aria-hidden='true'
              >
                <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'></path>
              </svg>
              <Link onClick={() => toggleDrawer()} to='http://localhost:5174'>
                <p className='font-medium text-xl'>Admin</p>
              </Link>
            </li>
          )}

          {!isSignedIn && (
            <li className='flex items-center gap-3 py-2'>
              <img
                width={25}
                className='hidden! dark:inline!'
                src={svgObject.outLight}
                aria-hidden='true'
              />
              <img
                width={25}
                src={svgObject.outDark}
                className='inline! dark:hidden!'
                aria-hidden='true'
              />
              <Link onClick={() => toggleDrawer()} to='signin'>
                <p className='font-medium text-xl'>Signin</p>
              </Link>
            </li>
          )}

          {isSignedIn && (
            <li className='flex items-center gap-3 py-2'>
              <img
                width={25}
                className='hidden! dark:inline!'
                src={svgObject.outLight}
                aria-hidden='true'
              />
              <img
                width={25}
                src={svgObject.outDark}
                className='inline! dark:hidden!'
                aria-hidden='true'
              />
              <Link
                onClick={() => {
                  toggleDrawer();
                  signoutUser();
                }}
                to='signin'
              >
                <p className='font-medium text-xl'>Signout</p>
              </Link>
            </li>
          )}

          <li
            tabIndex={1}
            role='button'
            className='flex items-center gap-3'
            onClick={() => toggleTheme()}
          >
            <img
              width={25}
              src={svgObject.moon}
              alt='moon svg'
              className='dark:hidden! inline'
            />
            <img
              width={25}
              src={svgObject.sun}
              alt='sun svg'
              className='hidden! dark:inline!'
            />
            <p className='dark:hidden! inline font-medium text-xl'>
              Light mode
            </p>
            <p className='hidden dark:inline font-medium text-xl'>Dark mode</p>
          </li>
        </ul>
      </nav>
      <div
        tabIndex={1}
        role='button'
        onClick={() => toggleDrawer()}
        className='text-white dark:bg-slate-900 bg-gray-400 w-[20%]'
      >
        <button className='w-full pt-5' aria-label='collapse sidebar'>
          <img
            className='dark:inline! hidden! mx-auto'
            src={svgObject.closeWhite}
            alt='close button cross'
            width={25}
          />
          <img
            src={svgObject.closeBlack}
            className='inline dark:hidden! mx-auto!'
            alt='close button cross'
            width={25}
          />
        </button>
      </div>
    </aside>
  );
}
