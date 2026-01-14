import { Link } from 'react-router';
import svgObject from '../../utils/svgObject';

export default function Drawer({
  toggleDrawer,
  toggleTheme,
  drawerState,
}: {
  drawerState: boolean;
  toggleTheme: () => void;
  toggleDrawer: () => void;
}) {
  return (
    <aside
      className={`z-1 absolute top-0 w-screen h-screen flex  transition-transform duration-500 ease-out
          ${drawerState ? '-translate-x-100' : ''}`}
    >
      <nav className='dark:text-white text-gray-800 dark:bg-slate-800 w-80 bg-white p-3 overflow-hidden'>
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
          <hr className='w-100 -translate-x-10 my-10!' />
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
        className='text-white dark:bg-slate-900 bg-gray-400 w-20'
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
