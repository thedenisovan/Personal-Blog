import { useEffect, useState, type FormEvent } from 'react';
import { useOutletContext, Link } from 'react-router';

export default function NewPostForm() {
  const { isAdmin } = useOutletContext<{ isAdmin: boolean }>();

  const [authorId, setAuthorId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [published, setPublished] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const getAuthorId = () => {
      const author = localStorage.getItem('author');
      if (author) setAuthorId(JSON.parse(author).id);
    };

    const getToken = () => {
      const token = localStorage.getItem('token');

      if (token) setToken(token);
      else setToken('');
    };

    if (isAdmin) {
      getAuthorId();
      getToken();
    }
  });

  const submitNewPost = async (
    e: FormEvent,
    title: string,
    content: string,
    description: string,
    published: boolean,
    categoryId?: number | null,
    categoryName?: string | null,
  ) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localstorage:5000/newPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          authorId,
          title,
          content,
          description,
          published,
          categoryId,
          categoryName,
        }),
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(
        `Error occur during posting new post ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };

  return (
    <main className='bg-slate-900 min-h-screen'>
      <section className=' max-w-6xl mx-auto! px-6 py-8'>
        <Link
          className='text-gray-300 text-lg flex items-center gap-2 hover:text-white mb-8! font-medium transition-colors'
          to='/'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-arrow-left w-4 h-4'
            aria-hidden='true'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
          Cancel
        </Link>
        <form
          onSubmit={(e) =>
            submitNewPost(
              e,
              title,
              content,
              description,
              published,
              categoryId,
              categoryName,
            )
          }
        ></form>
      </section>
    </main>
  );
}
