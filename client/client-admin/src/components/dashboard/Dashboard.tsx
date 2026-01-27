import Hero from './Hero';
import { Navigate } from 'react-router';
import { useOutletContext } from 'react-router';

export default function Dashboard() {
  const { isAdmin } = useOutletContext<{ isAdmin: boolean }>();

  if (!isAdmin) {
    return <Navigate to='signin' />;
  }
  return (
    <div className='bg-slate-700 h-screen'>
      <Hero />
    </div>
  );
}
