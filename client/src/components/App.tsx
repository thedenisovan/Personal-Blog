import { Outlet } from 'react-router';
import Header from './header/Header';
import { useEffect, useState } from 'react';
import Footer from './footer/Footer';
import useFetchPosts from './fetchPosts';

export default function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { allPosts, loading, error } = useFetchPosts();

  const toggleSignIn = (value: boolean) => setIsSignedIn(value);
  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem('token')) setIsSignedIn(true);
    };

    checkLocalStorage();
  });

  return (
    <div
      className={`min-h-screen  dark:bg-slate-900 bg-gray-50 flex flex-col ${
        theme ? 'dark' : ''
      } `}
    >
      <Header
        isSignedIn={isSignedIn}
        toggleSignIn={toggleSignIn}
        toggleTheme={toggleTheme}
      />
      <Outlet
        context={{ isSignedIn, toggleSignIn, allPosts, loading, error }}
      />
      <Footer />
    </div>
  );
}
