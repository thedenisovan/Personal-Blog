import { Outlet } from 'react-router';
import Header from './header/Header';
import { useState } from 'react';
import Footer from './footer/Footer';
import useFetchPosts from './fetchPosts';

export default function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { posts } = useFetchPosts();

  const toggleSignIn = (value: boolean) => setIsSignedIn(value);
  const toggleTheme = () => setTheme(!theme);

  return (
    <div
      className={`min-h-screen dark:bg-slate-900 bg-gray-100 flex flex-col ${
        theme ? 'dark' : ''
      } `}
    >
      <Header isSignedIn={isSignedIn} toggleTheme={toggleTheme} />
      <Outlet context={{ isSignedIn, toggleSignIn, posts }} />
      <Footer />
    </div>
  );
}
