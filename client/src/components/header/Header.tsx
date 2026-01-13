import { Link } from 'react-router';
import Drawer from './Drawer';
import { useState } from 'react';
import svgObject from '../../utils/svgObject';

export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  const [drawerState, setDrawerState] = useState(true);

  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <header className='border-b-2 relative dark:bg-slate-800 dark:text-white'>
      <ul className='flex justify-between items-center mx-3!'>
        <li className='max-w-15'>
          <h1 className='text-center font-medium'>Dainis Dilevka</h1>
        </li>
        <li className='hidden'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hidden'>
          <Link to='/about'>About</Link>
        </li>
        <li>
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
              className='dark:block!'
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
