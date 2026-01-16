import { Link } from 'react-router';
import Drawer from './Drawer';
import { useState } from 'react';
import svgObject from '../../utils/svgObject';

export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  const [drawerState, setDrawerState] = useState(true);

  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <header className='relative dark:bg-slate-800 dark:border-slate-700 bg-white border-b border-gray-200 dark:text-white'>
      <ul className='flex justify-between items-center px-2 py-2! dark:p-3!'>
        <li>
          <h2 className='text-center font-medium text-xl'>Dainis</h2>
          <h2 className='text-center font-medium text-xl'>Dilevka</h2>
        </li>
        <li className='hidden lg:inline'>
          <Link to='/'>Articles</Link>
        </li>
        <li className='hidden lg:inline'>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <button
            onClick={() => toggleDrawer()}
            aria-label='display sidebar'
            className='lg:hidden'
          >
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
        drawerState={drawerState}
        toggleTheme={toggleTheme}
        toggleDrawer={toggleDrawer}
      ></Drawer>
    </header>
  );
}
