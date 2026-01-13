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
      className={`absolute top-0 w-screen h-screen flex transition-transform duration-500 ease-out
          ${drawerState ? '-translate-x-100' : 'translate-x-0'}`}
    >
      <ul className='dark:text-white text-black dark:bg-slate-800 w-80 bg-white'>
        <li>
          <Link onClick={() => toggleDrawer()} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleDrawer()} to='/about'>
            About
          </Link>
        </li>
        <hr />
        <li className='flex' onClick={() => toggleTheme()}>
          <img
            src={svgObject.moon}
            alt='moon svg'
            className='dark:hidden! inline'
          />
          <img
            src={svgObject.sun}
            alt='sun svg'
            className='hidden! dark:inline!'
          />
          <p className='dark:hidden! inline'>Light mode</p>
          <p className='hidden dark:inline'>Dark mode</p>
        </li>
      </ul>
      <div
        onClick={() => toggleDrawer()}
        className='text-white dark:bg-slate-900 bg-gray-500 w-20'
      >
        <button aria-label='collapse sidebar'>X</button>
      </div>
    </aside>
  );
}
