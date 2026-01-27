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
      checkUserStatus(setIsAdmin);
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

function checkUserStatus(setIsAdmin: (val: boolean) => void) {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode<{ role: string; exp: number }>(token);

    if (decoded.role !== 'ADMIN') {
      setIsAdmin(false);
    } else if (decoded.role === 'ADMIN' && decoded.exp < Date.now()) {
      setIsAdmin(false);
    }

    setIsAdmin(true);
  } else {
    setIsAdmin(false);
  }
}
