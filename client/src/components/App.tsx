import { useState, useEffect } from 'react';

export default function App() {
  const [userData, setUserData] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setUserData(String(data.message)))
      .catch((err) => {
        console.error('fetch error:', err);
        setUserData(null);
      });
  }, []);

  return (
    <div>
      <h1 className='text-4xl'>{userData}</h1>
    </div>
  );
}
