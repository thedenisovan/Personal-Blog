import Header from './header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import useFetchPosts from '../../../client-user/src/components/fetchPosts';

export default function App() {
  // Flag to check does current user have access to this page
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { allPosts, loading, error } = useFetchPosts(
    'http://localhost:5000/?posts=all',
  );

  const signOutUser = () => {
    setIsAdmin(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // On load check user admin privileges
  useEffect(() => {
    const checkStatus = () => {
      checkUserStatus(setIsAdmin, signOutUser);
    };

    checkStatus();
  });

  return (
    <>
      <Header signOutUser={signOutUser} isAdmin={isAdmin} />
      <div>
        <Outlet context={{ isAdmin, setIsAdmin, allPosts, loading, error }} />
      </div>
    </>
  );
}

// Signs out user if his token is expired or he is no admin
function checkUserStatus(
  setIsAdmin: (val: boolean) => void,
  signOutUser: () => void,
) {
  const token = localStorage.getItem('token');
  // If token exists
  if (token) {
    const decoded = jwtDecode<{ role: string; exp: number }>(token);
    const currentTime = Date.now() / 1000;

    // If user is admin and his token has not expired grant him access
    if (decoded.role === 'ADMIN' && decoded.exp > currentTime) {
      setIsAdmin(true);
    } else {
      signOutUser();
    }
  } else {
    signOutUser();
  }
}
