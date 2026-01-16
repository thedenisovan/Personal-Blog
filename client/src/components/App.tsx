import { Outlet } from 'react-router';
import Header from './header/Header';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => setTheme(!theme);

  return (
    <div className={`${theme ? 'dark' : ''} min-h-screen`}>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  );
}
