import { Link } from 'react-router';

export default function ErrorElement() {
  return (
    <div className='h-screen flex flex-col justify-center m-auto text-center'>
      <h2 className='text-3xl'>Whops you have came to unknown waters</h2>
      <p className='text-3xl'>
        You can go back to{' '}
        <Link className='text-blue-500' to='/'>
          main page
        </Link>
      </p>
    </div>
  );
}
