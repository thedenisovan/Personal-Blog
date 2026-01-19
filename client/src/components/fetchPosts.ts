import { useEffect, useState } from 'react';

export default function useFetchPosts(url = 'http://localhost:5000/') {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data.results ?? []);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('Unknown Error');
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { posts, error, loading };
}
