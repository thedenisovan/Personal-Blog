import { Outlet } from 'react-router';
import Header from './header/Header';
import { useEffect, useState } from 'react';
import Footer from './footer/Footer';
import useFetchPosts from './fetchPosts';
import { jwtDecode } from 'jwt-decode';
import type { UserToken } from '../types/react';

export default function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { allPosts, loading, error } = useFetchPosts();
  const [user, setUser] = useState<UserToken | null>(null);

  const toggleSignIn = (value: boolean) => setIsSignedIn(value);
  const toggleTheme = () => setTheme(!theme);
  const signoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsSignedIn(false);
    setUser(null);
  };

  useEffect(() => {
    signoutExpiredUser(setIsSignedIn, signoutUser, setUser);
  }, []);

  return (
    <div
      className={`min-h-screen  dark:bg-slate-900 bg-gray-50 flex flex-col ${
        theme ? 'dark' : ''
      } `}
    >
      <Header
        isSignedIn={isSignedIn}
        toggleTheme={toggleTheme}
        signoutUser={signoutUser}
      />
      <Outlet
        context={{
          isSignedIn,
          toggleSignIn,
          allPosts,
          loading,
          error,
          setUser,
          user,
        }}
      />
      <Footer />
    </div>
  );
}

function signoutExpiredUser(
  setIsSignedIn: (val: boolean) => void,
  signoutUser: () => void,
  setUser: (val: UserToken | null) => void,
) {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);

      const currentTime = Date.now() / 1000;
      if (decoded.exp && decoded.exp < currentTime) {
        // Token expired, remove it
        signoutUser();
      } else {
        setUser(decoded as UserToken);
        setIsSignedIn(true);
      }
    } catch {
      // Invalid token, remove it
      signoutUser();
    }
  } else {
    signoutUser();
  }
}
