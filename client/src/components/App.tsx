import { Outlet } from 'react-router';
import Header from './header/Header';
import { useEffect, useState } from 'react';
import Footer from './footer/Footer';
import useFetchPosts from './fetchPosts';
import { jwtDecode } from 'jwt-decode';

export default function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { allPosts, loading, error } = useFetchPosts();

  const toggleSignIn = (value: boolean) => setIsSignedIn(value);
  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    signoutExpiredUser(setIsSignedIn);
  }, []);

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
        context={{
          isSignedIn,
          toggleSignIn,
          allPosts,
          loading,
          error,
        }}
      />
      <Footer />
    </div>
  );
}

function signoutExpiredUser(setIsSignedIn: (val: boolean) => void) {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp && decoded.exp < currentTime) {
        // Token expired, remove it
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsSignedIn(false);
      }
    } catch {
      // Invalid token, remove it
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsSignedIn(false);
    }
  } else {
    localStorage.removeItem('user');
    setIsSignedIn(false);
  }
}
