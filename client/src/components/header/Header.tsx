import { Link } from 'react-router';

export default function Header() {
  return (
    <header className='border-b-2'>
      <ul className='flex justify-between items-center m-4'>
        <li className='max-w-15'>
          <h1>Dainis Dilevka</h1>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <button>More</button>
        </li>
      </ul>
    </header>
  );
}
