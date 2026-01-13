import { Link } from 'react-router';
import Drawer from './Drawer';
import { useState } from 'react';

export default function Header() {
  const [drawerState, setDrawerState] = useState(true);

  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <header className='border-b-2 relative'>
      <ul className='flex justify-between items-center mx-3!'>
        <li className='max-w-15'>
          <h1>Dainis Dilevka</h1>
        </li>
        <li className='hidden'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hidden'>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <button onClick={() => toggleDrawer()}>More</button>
        </li>
      </ul>
      <Drawer
        className={`absolute top-0 w-screen h-screen flex
          ${drawerState ? 'hidden' : ''}`}
        toggleDrawer={toggleDrawer}
      ></Drawer>
    </header>
  );
}
