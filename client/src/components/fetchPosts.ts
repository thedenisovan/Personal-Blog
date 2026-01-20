import { useEffect, useState } from 'react';

export default function useFetchPosts(
  url: string = 'http://localhost:5000/',
  multiple: boolean = true,
) {
  const [allPosts, setAllPosts] = useState<Post[] | Post>([]);
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // If hook is used to get all posts use top state else bottom
        if (multiple) setAllPosts(data.results ?? []);
        else setPost(data.results ?? '');
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('Unknown Error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, multiple]);

  console.log(post);
  return { allPosts, error, loading, post };
}
