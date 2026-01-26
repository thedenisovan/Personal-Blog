import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <div className='flex items-center max-w-4xl mx-auto! gap-6'>
        <Link to={'http://localhost:5173'}>Back to Reader</Link>
        <h1 className='font-bold text-2xl'>Admin Dashboard</h1>
      </div>
    </header>
  );
}
