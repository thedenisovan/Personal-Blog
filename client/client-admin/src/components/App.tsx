import Header from './header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { jwtDecode } from 'jwt-decode';

export default function App() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const signOutUser = () => {
    setIsAdmin(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

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
        <Outlet context={{ isAdmin, setIsAdmin }} />
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
