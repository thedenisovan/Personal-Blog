import { Link } from 'react-router';

export default function Drawer({
  className,
  toggleDrawer,
}: {
  className: string;
  toggleDrawer: () => void;
}) {
  return (
    <aside className={className}>
      <ul className='text-white bg-black w-80'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div
        onClick={() => toggleDrawer()}
        className='text-black bg-blue-400 w-20'
      >
        <button onClick={() => toggleDrawer()}>X</button>
      </div>
    </aside>
  );
}
