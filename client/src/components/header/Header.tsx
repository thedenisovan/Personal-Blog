import { Link } from 'react-router';
import Drawer from './Drawer';
import { useState } from 'react';
import svgObject from '../../utils/svgObject';

export default function Header({
  toggleTheme,
  isSignedIn,
  signoutUser,
}: {
  toggleTheme: () => void;
  signoutUser: () => void;
  isSignedIn: boolean;
}) {
  const [drawerState, setDrawerState] = useState(true);

  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <div className='sticky z-40 top-0! dark:bg-slate-800 dark:border-slate-700 bg-white border-b border-gray-200 dark:text-white py-3'>
      <header className='max-w-6xl mx-auto! h-16 px-6 xl:px-0'>
        <ul className='flex justify-between items-center! h-full'>
          <ul className='flex items-center gap-20'>
            <li>
              <Link className='cursor-default' to='/'>
                <h2 className='text-center font-medium text-xl md:hidden'>
                  Dainis
                </h2>
                <h2 className='text-center font-medium text-xl md:hidden'>
                  Dilevka
                </h2>
                <h2 className=' font-medium text-2xl hidden md:inline'>
                  Dainis Dilevka
                </h2>
              </Link>
            </li>
            <li className='hidden md:inline'>
              <Link to='/' className='flex items-center gap-1'>
                <img
                  src={svgObject.latestWhite}
                  alt='articles icon'
                  aria-hidden='true'
                  width={25}
                  className='dark:inline! hidden!'
                />
                <img
                  src={svgObject.latestBlack}
                  alt='articles icon'
                  aria-hidden='true'
                  width={25}
                  className='inline! dark:hidden!'
                />
                <p className='hover:border-b text-lg'>Articles</p>
              </Link>
            </li>
            <li className='hidden md:inline'>
              <Link to='/about' className='flex items-center gap-1'>
                <img
                  src={svgObject.aboutWhite}
                  alt='articles icon'
                  aria-hidden='true'
                  width={25}
                  className='dark:inline! hidden!'
                />
                <img
                  src={svgObject.aboutBlack}
                  alt='articles icon'
                  aria-hidden='true'
                  width={25}
                  className='inline! dark:hidden!'
                />
                <p className='hover:border-b text-lg'>About</p>
              </Link>
            </li>
          </ul>
          <div className='items-center gap-6 hidden md:flex'>
            {!isSignedIn && (
              <Link
                to='signin'
                className='cursor-pointer hover:bg-slate-700/80 duration-200 shadow-xl bg-black dark:bg-slate-700 flex items-center px-3 py-2 rounded-lg'
              >
                <img width={25} src={svgObject.outLight} aria-hidden='true' />
                <p className='font-medium text-white'>Signin</p>
              </Link>
            )}
            {isSignedIn && (
              <button
                onClick={() => {
                  signoutUser();
                }}
                className='cursor-pointer hover:bg-slate-700/80 duration-200 shadow-xl bg-black dark:bg-slate-700 flex items-center px-3 py-2 rounded-lg'
              >
                <img width={25} src={svgObject.outLight} aria-hidden='true' />
                <p className='font-medium text-white'>Signout</p>
              </button>
            )}
            <li className=' hidden md:block'>
              <button
                onClick={() => toggleTheme()}
                className='dark:inline! hidden! cursor-pointer hover:bg-slate-400/20 duration-200 border-gray-500! p-2 border rounded-lg'
              >
                <img
                  width={24}
                  src={svgObject.sun}
                  alt='light theme button icon'
                />
              </button>
              <button
                onClick={() => toggleTheme()}
                className='dark:hidden! inline! cursor-pointer border-gray-400! hover:bg-slate-800/5 duration-200 p-2 border rounded-lg'
              >
                <img
                  width={24}
                  src={svgObject.moon}
                  alt='dark theme button icon'
                />
              </button>
            </li>
          </div>
          <li className='md:hidden'>
            <button onClick={() => toggleDrawer()} aria-label='display sidebar'>
              <img
                width={35}
                src={svgObject.moreBlack}
                alt='three vertical dots'
                className='dark:hidden!'
              />
              <img
                width={35}
                src={svgObject.moreWhite}
                alt='three vertical dots'
                className='hidden! dark:block!'
              />
            </button>
          </li>
        </ul>
        <Drawer
          isSignedIn={isSignedIn}
          drawerState={drawerState}
          toggleTheme={toggleTheme}
          toggleDrawer={toggleDrawer}
          signoutUser={signoutUser}
        ></Drawer>
      </header>
    </div>
  );
}
