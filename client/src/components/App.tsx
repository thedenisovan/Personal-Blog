import { Outlet } from 'react-router';
import Header from './header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
